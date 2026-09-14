import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schema';
import { getSupabaseAdmin } from '@/lib/supabase';

// In-memory rate limiting map: ip -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const MAX_SUBMISSIONS_PER_HOUR = 3;
const ONE_HOUR_MS = 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + ONE_HOUR_MS };

    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + ONE_HOUR_MS;
    }

    if (rateData.count >= MAX_SUBMISSIONS_PER_HOUR) {
      return NextResponse.json(
        {
          success: false,
          message: 'Rate limit exceeded. Maximum 3 contact submissions per hour allowed.',
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload with Zod
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check input fields.',
          errors: result.error.format(),
        },
        { status: 400 }
      );
    }

    const { name, email, message, website_hp } = result.data;

    // 3. Honeypot Verification (bot protection)
    if (website_hp && website_hp.trim().length > 0) {
      // Silently accept bot submission without persisting
      return NextResponse.json({
        success: true,
        message: 'Thank you for reaching out!',
      });
    }

    // Increment rate limit count
    rateData.count += 1;
    rateLimitMap.set(ip, rateData);

    // 4. Insert row into Supabase 'contacts' table
    const supabaseAdmin = getSupabaseAdmin();
    let supabaseSuccess = false;

    if (supabaseAdmin) {
      const { error } = await supabaseAdmin.from('contacts').insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error('Supabase contact insert error:', error);
      } else {
        supabaseSuccess = true;
      }
    }

    // 5. Trigger n8n webhook notification if configured
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'contact_form_submission',
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error('n8n webhook notification error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! I will respond within 24 hours.',
      data: {
        persisted: supabaseSuccess,
      },
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
