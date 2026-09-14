import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  return (
    <footer className="bg-[#0C0C0E] border-t border-[#2A2A30] pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#2A2A30]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 text-[#F0EEEB] font-bold text-xl">
              <div className="w-7 h-7 rounded-md bg-[#636CF5]/20 border border-[#636CF5]/40 flex items-center justify-center text-[#636CF5]">
                <Terminal className="w-4 h-4" />
              </div>
              <span>Dulanga Lakshan</span>
            </Link>
            <p className="text-sm text-[#9D9B95] max-w-md leading-relaxed">
              Computer Engineer specializing in Full-Stack Web Development, Cloud Infrastructure & DevOps, and Agentic Automation Workflows.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#5C5B57]">
              <span className="w-2 h-2 rounded-full bg-[#3ECF71] animate-pulse"></span>
              <span>Available for engineering contracts and full-time roles</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F0EEEB] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#9D9B95]">
              <li>
                <Link href="/" className="hover:text-[#F0EEEB] transition-colors">Home & About</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F0EEEB] transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F0EEEB] transition-colors">Learning Journal (Blog)</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F0EEEB] transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F0EEEB] uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-[#9D9B95]">
              <li>
                <a
                  href="https://github.com/dualangalakshan002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F0EEEB] transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 text-[#636CF5]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5C5B57] group-hover:text-[#F0EEEB] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F0EEEB] transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#636CF5]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5C5B57] group-hover:text-[#F0EEEB] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dulangalakshan.dev"
                  className="inline-flex items-center gap-1.5 hover:text-[#F0EEEB] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#636CF5]" />
                  <span>Email Me</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5C5B57] group-hover:text-[#F0EEEB] transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C5B57]">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Dulanga Lakshan. Built with Next.js, Tailwind CSS & Supabase.</p>
          <p className="flex items-center gap-1">
            <span>Zero-Cost Stack</span>
            <span>•</span>
            <span className="text-[#3ECF71] font-medium">$0/mo Infra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
