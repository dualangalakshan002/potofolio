import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schema';
import { getSupabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

// In-memory rate limiting map: ip -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const MAX_SUBMISSIONS_PER_HOUR = 5;
const ONE_HOUR_MS = 60 * 60 * 1000;
const DESTINATION_EMAIL = 'dg.dulanga.lakshan@gmail.com';

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
          message: 'Rate limit exceeded. Maximum 5 contact submissions per hour allowed.',
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
      return NextResponse.json({
        success: true,
        message: 'Thank you for reaching out!',
      });
    }

    // Increment rate limit count
    rateData.count += 1;
    rateLimitMap.set(ip, rateData);

    // 4. Send Email via Resend to dg.dulanga.lakshan@gmail.com
    const resendApiKey = process.env.RESEND_API_KEY;
    let emailSent = false;

    if (resendApiKey && resendApiKey !== 're_your_api_key_here') {
      try {
        const resend = new Resend(resendApiKey);

        const emailResult = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [DESTINATION_EMAIL],
          replyTo: email,
          subject: `📬 New Message from ${name} (Portfolio)`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1f2937; border-radius: 12px; border: 1px solid #e5e7eb;">
              <div style="border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #111827; font-size: 20px;">New Portfolio Contact Submission</h2>
                <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Received via dulangalakshan.dev contact form</p>
              </div>

              <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
                <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
              </div>

              <div style="margin-bottom: 24px;">
                <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin: 0 0 8px 0;">Message</p>
                <div style="background-color: #f3f4f6; border-left: 4px solid #6366f1; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #1f2937;">
${message}
                </div>
              </div>

              <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
                <p style="margin: 0;">You can click <strong>Reply</strong> directly in your email client to respond to ${name} (${email}).</p>
              </div>
            </div>
          `,
        });

        if (!emailResult.error) {
          emailSent = true;
        } else {
          console.error('Resend email error:', emailResult.error);
        }
      } catch (err) {
        console.error('Failed to dispatch email via Resend:', err);
      }
    } else {
      console.warn('RESEND_API_KEY is not configured in .env.local yet.');
    }

    // 5. Optional: Insert row into Supabase 'contacts' table if configured
    let supabaseSuccess = false;
    try {
      const supabaseAdmin = getSupabaseAdmin();
      if (supabaseAdmin) {
        const { error } = await supabaseAdmin.from('contacts').insert([
          {
            name,
            email,
            message,
            created_at: new Date().toISOString(),
          },
        ]);
        if (!error) supabaseSuccess = true;
      }
    } catch (err) {
      console.error('Supabase error (optional):', err);
    }

    // 6. Optional: Trigger n8n webhook notification if configured
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl && !n8nWebhookUrl.includes('yourdomain.com')) {
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
        console.error('n8n webhook error (optional):', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! I will respond within 24 hours.',
      data: {
        emailDelivered: emailSent,
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

