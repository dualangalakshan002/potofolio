import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Dulanga Lakshan - Computer Engineer',
  description:
    'Get in touch with Dulanga Lakshan for software engineering contracts, cloud architecture consulting, or full-time opportunities.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#636CF5]/15 text-[#868DF8] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-[#3ECF71]" />
            <span>Initiate Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F0EEEB] tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base text-[#9D9B95] leading-relaxed">
            Have a project in mind, need full-stack or DevOps engineering expertise, or want to discuss automated AI workflows? Fill out the form or reach out directly.
          </p>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </div>
  );
}
