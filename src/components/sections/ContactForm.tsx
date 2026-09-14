'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send, Clock, Bot, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, ContactFormValues } from '@/lib/schema';

export function ContactForm() {
  const [status, setStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
  }>({ loading: false });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus({ loading: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          loading: false,
          success: true,
          message: result.message || 'Message sent successfully!',
        });
        reset();
      } else {
        setStatus({
          loading: false,
          success: false,
          message: result.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Contact Form Column */}
      <div className="lg:col-span-7">
        <Card className="bg-[#141417] border-[#2A2A30] p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#F0EEEB] mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs text-[#9D9B95] mb-6">
            Fill out the form below. Messages are saved securely in Supabase and trigger real-time notifications via n8n automation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot Input (hidden from normal users) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              {...register('website_hp')}
            />

            <div>
              <label className="block text-xs font-semibold text-[#F0EEEB] mb-1.5">
                Your Name <span className="text-[#636CF5]">*</span>
              </label>
              <Input
                placeholder="e.g. Sarah Jenkins"
                {...register('name')}
                error={errors.name?.message}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F0EEEB] mb-1.5">
                Email Address <span className="text-[#636CF5]">*</span>
              </label>
              <Input
                type="email"
                placeholder="e.g. sarah@company.com"
                {...register('email')}
                error={errors.email?.message}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F0EEEB] mb-1.5">
                Message <span className="text-[#636CF5]">*</span>
              </label>
              <Textarea
                rows={5}
                placeholder="Tell me about your project, timeline, or engineering role..."
                {...register('message')}
                error={errors.message?.message}
              />
            </div>

            {/* Status Alert Banner */}
            {status.message && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 text-xs font-medium ${
                  status.success
                    ? 'bg-[#3ECF71]/15 text-[#3ECF71] border border-[#3ECF71]/30'
                    : 'bg-red-500/15 text-red-400 border border-red-500/30'
                }`}
              >
                {status.success ? (
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status.loading}
              className="w-full gap-2 mt-2"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>

      {/* Sidebar Info Column */}
      <div className="lg:col-span-5 space-y-6">
        {/* Response Time Indicator */}
        <Card className="bg-[#141417] border-[#2A2A30] p-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF71] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3ECF71]"></span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#F0EEEB]">Avg Response Time</div>
              <div className="text-xs text-[#3ECF71] font-medium flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3" /> Under 24 hours
              </div>
            </div>
          </div>
        </Card>

        {/* Direct Links */}
        <Card className="bg-[#141417] border-[#2A2A30] p-6 space-y-4">
          <h4 className="text-sm font-bold text-[#F0EEEB] uppercase tracking-wider">
            Direct Contact & Socials
          </h4>

          <div className="space-y-3">
            <a
              href="mailto:contact@dulangalakshan.dev"
              className="flex items-center gap-3 p-3 rounded-lg bg-[#222228] border border-[#2A2A30] text-xs text-[#F0EEEB] hover:border-[#636CF5] transition-colors"
            >
              <div className="p-2 rounded bg-[#141417] text-[#636CF5]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[#5C5B57]">Direct Email</div>
                <div className="font-mono font-medium text-[#F0EEEB]">contact@dulangalakshan.dev</div>
              </div>
            </a>

            <a
              href="https://github.com/dualangalakshan002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-[#222228] border border-[#2A2A30] text-xs text-[#F0EEEB] hover:border-[#636CF5] transition-colors"
            >
              <div className="p-2 rounded bg-[#141417] text-[#636CF5]">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[#5C5B57]">GitHub Profile</div>
                <div className="font-mono font-medium text-[#F0EEEB]">github.com/dualangalakshan002</div>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-[#222228] border border-[#2A2A30] text-xs text-[#F0EEEB] hover:border-[#636CF5] transition-colors"
            >
              <div className="p-2 rounded bg-[#141417] text-[#636CF5]">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[#5C5B57]">LinkedIn</div>
                <div className="font-mono font-medium text-[#F0EEEB]">linkedin.com/in/dulanga</div>
              </div>
            </a>
          </div>
        </Card>

        {/* n8n Explanation Card */}
        <Card className="bg-[#141417] border-[#636CF5]/30 p-6 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#868DF8] uppercase tracking-wider mb-2">
            <Bot className="w-4 h-4 text-[#3ECF71]" />
            <span>n8n Webhook Workflow</span>
          </div>

          <h4 className="text-base font-bold text-[#F0EEEB] mb-2">
            How Contact Processing Works
          </h4>

          <p className="text-xs text-[#9D9B95] leading-relaxed">
            When submitted, your message is validated server-side, stored securely in a Supabase PostgreSQL table, and triggers an autonomous n8n cloud webhook that dispatches a real-time notification to my devices.
          </p>
        </Card>
      </div>
    </div>
  );
}
