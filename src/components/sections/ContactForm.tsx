'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
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
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const messageText = watch('message') || '';

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
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  return (
    <div className="w-full">
      <Card className="bg-[#141417] border-[#2A2A30] p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#636CF5] to-transparent" />

        {status.success ? (
          <div className="py-8 px-4 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#3ECF71]/15 border border-[#3ECF71]/30 text-[#3ECF71] mx-auto flex items-center justify-center shadow-lg shadow-[#3ECF71]/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-[#F0EEEB]">Message Sent!</h3>
              <p className="text-sm text-[#9D9B95] leading-relaxed">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#222228] border border-[#2A2A30] text-xs text-[#9D9B95] max-w-sm mx-auto flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#3ECF71]" />
              <span>Typical response time: <strong>under 24 hours</strong></span>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => setStatus({ loading: false })}
                className="gap-2"
              >
                <span>Send Another Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F0EEEB]">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#9D9B95] mt-1">
                Fill in the form below and I will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot Input */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                {...register('website_hp')}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F0EEEB] mb-1.5">
                    Your Name <span className="text-[#636CF5]">*</span>
                  </label>
                  <Input
                    placeholder="e.g. Alex Morgan"
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
                    placeholder="e.g. alex@company.com"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[#F0EEEB]">
                    Message <span className="text-[#636CF5]">*</span>
                  </label>
                  <span className="text-[11px] text-[#5C5B57] font-mono">
                    {messageText.length} / 2000
                  </span>
                </div>
                <Textarea
                  rows={5}
                  placeholder="Write your message here..."
                  {...register('message')}
                  error={errors.message?.message}
                />
              </div>

              {status.message && (
                <div
                  className={`p-3.5 rounded-lg flex items-start gap-3 text-xs font-medium ${
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
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </Card>
    </div>
  );
}



