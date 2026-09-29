import React from 'react';
import { Layout, Cloud, Bot, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export function WhatIDo() {
  const pillars = [
    {
      title: 'Full-Stack Development',
      icon: Layout,
      color: 'text-[#636CF5]',
      bgGlow: 'from-[#636CF5]/20 to-transparent',
      description:
        'Building responsive, fast, and accessible web applications with modern frontend frameworks and robust backend microservices.',
      skills: ['Next.js (App Router)', 'TypeScript & React', 'RESTful APIs & GraphQL', 'Tailwind CSS & UI Systems'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-[#3ECF71]',
      bgGlow: 'from-[#3ECF71]/20 to-transparent',
      description:
        'Architecting zero-downtime deployment pipelines, containerized environments, serverless endpoints, and infrastructure-as-code.',
      skills: ['Docker & Containerization', 'Azure Container Apps', 'CI/CD GitHub Actions', 'PostgreSQL'],
    },
    {
      title: 'Automation & AI Workflows',
      icon: Bot,
      color: 'text-[#868DF8]',
      bgGlow: 'from-[#868DF8]/20 to-transparent',
      description:
        'Designing event-driven automations, self-hosted n8n workflow pipelines, webhook integrations, and agentic AI tool callers.',
      skills: ['n8n Cloud & Self-Hosted', 'Agent Runtimes', 'Webhook Orchestration', 'LLM Function Calling'],
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-[#636CF5] uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight mt-2">
              What I Do
            </h2>
          </div>
          {/* <p className="text-sm text-[#9D9B95] max-w-md mt-2 md:mt-0">
            End-to-end engineering across application interfaces, server infrastructures, and automated intelligent runtimes.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                hoverable
                className="relative overflow-hidden bg-[#141417] border-[#2A2A30] flex flex-col justify-between"
              >
                {/* Subtle Card Glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pillar.bgGlow} blur-2xl pointer-events-none`}
                />

                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[#222228] border border-[#2A2A30] flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#F0EEEB]">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#9D9B95] mt-2 leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4 border-t border-[#2A2A30]/60">
                  <div className="text-xs font-semibold text-[#5C5B57] uppercase tracking-wider mb-2">
                    Key Technologies
                  </div>
                  <ul className="space-y-1.5">
                    {pillar.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#F0EEEB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#636CF5]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
