import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact | Dulanga Lakshan - Computer Engineer',
  description:
    'Get in touch with Dulanga Lakshan via email at dg.dulanga.lakshan@gmail.com, phone at 0714931978, or on LinkedIn and GitHub.',
};

export default function ContactPage() {
  return (
    <div className="relative py-12 md:py-20 overflow-hidden">
      {/* Decorative Radial Background Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#636CF5]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-80 right-10 w-[400px] h-[300px] bg-[#3ECF71]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#636CF5]/15 border border-[#636CF5]/30 text-[#868DF8] text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF71] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ECF71]"></span>
            </span>
            <span>Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F0EEEB] tracking-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#636CF5] via-[#868DF8] to-[#3ECF71]">
              Information
            </span>
          </h1>

          <p className="text-base text-[#9D9B95] leading-relaxed">
            Feel free to send a message using the form below or reach out directly via email, phone, or social profiles.
          </p>

          {/* Clean Contact Channels Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
            <a
              href="mailto:dg.dulanga.lakshan@gmail.com"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141417] border border-[#2A2A30] text-[#9D9B95] hover:border-[#636CF5] hover:text-[#F0EEEB] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#636CF5]" />
              <span className="text-[#F0EEEB] font-mono">dg.dulanga.lakshan@gmail.com</span>
            </a>

            <a
              href="tel:0714931978"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141417] border border-[#2A2A30] text-[#9D9B95] hover:border-[#3ECF71] hover:text-[#F0EEEB] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#3ECF71]" />
              <span className="text-[#F0EEEB] font-mono">0714931978</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dulanga-lakshan-97907a26b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141417] border border-[#2A2A30] text-[#9D9B95] hover:border-[#636CF5] hover:text-[#F0EEEB] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#636CF5]" />
              <span className="text-[#F0EEEB]">LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#5C5B57]" />
            </a>

            <a
              href="https://github.com/dualangalakshan002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141417] border border-[#2A2A30] text-[#9D9B95] hover:border-[#636CF5] hover:text-[#F0EEEB] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#F0EEEB]" />
              <span className="text-[#F0EEEB]">GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#5C5B57]" />
            </a>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">
              <MapPin className="w-3.5 h-3.5 text-[#868DF8]" />
              <span>Sri Lanka (UTC+5:30)</span>
            </div>
          </div>
        </div>

        {/* Clean Centered Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}


