import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#636CF5]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Green Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141417] border border-[#2A2A30] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF71] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3ECF71]"></span>
            </span>
            <span className="text-xs font-semibold text-[#F0EEEB] tracking-wide">
              Available for work
            </span>
            <span className="text-xs text-[#5C5B57]">•</span>
            <span className="text-xs text-[#9D9B95]">Full-stack & DevOps Engineer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F0EEEB] tracking-tight leading-[1.15]">
            Building smarter systems,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#636CF5] via-[#868DF8] to-[#3ECF71]">
              one workflow at a time.
            </span>{' '}
          </h1>

          {/* Intro Subhead */}
          <p className="text-lg sm:text-xl text-[#9D9B95] leading-relaxed max-w-2xl">
            Computer Engineer passionate about full-stack development, cloud-native solutions, automation, and AI-powered workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/projects">
              <Button variant="primary" size="lg" className="gap-2 group">
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4 text-[#636CF5]" />
                <span>Get in touch</span>
              </Button>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume-Dulanga-Lakshan.pdf"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="w-4 h-4 text-[#636CF5]" />
                <span>Resume</span>
              </Button>
            </a>
          </div>

          {/* Key Tech Badges */}
          <div className="pt-8 flex flex-wrap items-center gap-2 text-xs text-[#5C5B57]">
            <span className="flex items-center gap-1 font-mono text-[#9D9B95]">
              <Terminal className="w-3.5 h-3.5 text-[#636CF5]" /> stack:
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">Next.js</span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">TypeScript</span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">React</span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">Docker</span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">Azure</span>
            <span className="px-2.5 py-1 rounded-md bg-[#141417] border border-[#2A2A30] text-[#9D9B95]">n8n & AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
