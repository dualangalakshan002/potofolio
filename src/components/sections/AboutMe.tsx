import React from 'react';
import { Cpu, Layers, BookOpen, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Visual Avatar / Profile Card */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <Card className="relative p-6 bg-[#141417] border-[#2A2A30] overflow-hidden group">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#222228] to-[#141417] border border-[#2A2A30] flex flex-col items-center justify-center relative overflow-hidden mb-6">
                {/* Code Terminal Graphic / Placeholder */}
                <div className="w-24 h-24 rounded-full bg-[#636CF5]/10 border-2 border-[#636CF5]/40 flex items-center justify-center text-[#636CF5] shadow-lg shadow-[#636CF5]/10 mb-2">
                  <Cpu className="w-12 h-12" />
                </div>
                <span className="text-sm font-semibold text-[#F0EEEB]">Dulanga Lakshan</span>
                <span className="text-xs text-[#9D9B95]">Computer Engineer</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#9D9B95] border-b border-[#2A2A30] pb-2">
                  <span>Location</span>
                  <span className="text-[#F0EEEB] font-medium">Sri Lanka / Remote</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#9D9B95] border-b border-[#2A2A30] pb-2">
                  <span>Degree</span>
                  <span className="text-[#F0EEEB] font-medium">B.Sc. Eng (Hons)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#9D9B95]">
                  <span>Specialization</span>
                  <span className="text-[#636CF5] font-medium">Full-Stack & Cloud AI</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Narrative Content */}
          <div className="lg:w-2/3 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636CF5] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight">
              From low-level hardware roots to scalable cloud engineering.
            </h2>

            <p className="text-base text-[#9D9B95] leading-relaxed">
              My journey began in computer engineering with embedded systems, digital logic, and operating system fundamentals. Understanding how bytes move at the hardware level gives me a unique perspective on optimizing software performance, memory layouts, and network bandwidth.
            </p>

            {/* Evolution Flow Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141417] border border-[#2A2A30]">
                <div className="flex items-center gap-2 text-[#636CF5] font-semibold text-sm mb-1">
                  <Cpu className="w-4 h-4" /> Hardware Roots
                </div>
                <p className="text-xs text-[#9D9B95]">
                  Logic design, OS kernels, C/C++, networking fundamentals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141417] border border-[#2A2A30]">
                <div className="flex items-center gap-2 text-[#3ECF71] font-semibold text-sm mb-1">
                  <Layers className="w-4 h-4" /> Current Stack
                </div>
                <p className="text-xs text-[#9D9B95]">
                  Next.js, TypeScript, Spring Boot, Azure, Docker, Supabase.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141417] border border-[#2A2A30]">
                <div className="flex items-center gap-2 text-[#868DF8] font-semibold text-sm mb-1">
                  <BookOpen className="w-4 h-4" /> Learning Mindset
                </div>
                <p className="text-xs text-[#9D9B95]">
                  Agentic AI runtimes, n8n automations, LLM orchestration.
                </p>
              </div>
            </div>

            {/* Core Values / Bullet points */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-[#F0EEEB]">
                <CheckCircle2 className="w-4 h-4 text-[#3ECF71] mt-0.5 shrink-0" />
                <span><strong className="text-white">Clean Architecture:</strong> Decoupled logic, typed interfaces, and zero-bloat codebases.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#F0EEEB]">
                <CheckCircle2 className="w-4 h-4 text-[#3ECF71] mt-0.5 shrink-0" />
                <span><strong className="text-white">Zero-Cost Pragmatism:</strong> Maximizing serverless & free-tier cloud quotas without sacrificing scalability.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#F0EEEB]">
                <CheckCircle2 className="w-4 h-4 text-[#3ECF71] mt-0.5 shrink-0" />
                <span><strong className="text-white">Autonomous Automation:</strong> Building self-healing CI/CD pipelines and event-driven AI runtimes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
