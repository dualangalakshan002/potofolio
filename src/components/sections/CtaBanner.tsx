import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CtaBanner() {
  return (
    <section className="py-16 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#141417] via-[#1c1c24] to-[#141417] border border-[#636CF5]/30 p-8 sm:p-12 shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#636CF5]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3ECF71]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#636CF5]/15 text-[#868DF8] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Engineering Roles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight">
              Let&apos;s build something together.
            </h2>

            <p className="text-base text-[#9D9B95] leading-relaxed">
              Whether you need a full-stack web application, a cloud-native microservice architecture, or automated n8n & AI workflows, I&apos;m ready to collaborate.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="gap-2 group">
                  <Mail className="w-4 h-4" />
                  <span>Start a conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <a
                href="https://github.com/dualangalakshan002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Explore GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
