'use client';

import React, { useState } from 'react';
import { Code2, LayoutGrid, Server, Cloud, Bot, Database, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function SkillsTools() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const groups = [
    {
      category: 'Languages',
      icon: Code2,
      items: [
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Java', level: 'Advanced' },
        { name: 'Python', level: 'Proficient' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'HTML5 / CSS3', level: 'Advanced' },
      ],
    },
    {
      category: 'Frontend',
      icon: LayoutGrid,
      items: [
        { name: 'Next.js (App Router)', level: 'Advanced' },
        { name: 'React 18 / 19', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Zod & Validation', level: 'Advanced' },
        { name: 'React Hook Form', level: 'Advanced' },
        { name: 'Glassmorphic UI Design', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      items: [
        { name: 'Node.js & Express', level: 'Advanced' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'Spring Security JWT', level: 'Advanced' },
        { name: 'RESTful API Architecture', level: 'Advanced' },
        { name: 'Serverless Functions', level: 'Advanced' },
        { name: 'Microservices Design', level: 'Proficient' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { name: 'Vercel Deployment', level: 'Advanced' },
        { name: 'Azure Container Apps', level: 'Proficient' },
        { name: 'Docker & Compose', level: 'Advanced' },
        { name: 'GitHub Actions (CI/CD)', level: 'Proficient' },
        { name: 'Git & GitHub Workflows', level: 'Advanced' },
        { name: 'Linux Administration', level: 'Proficient' },
      ],
    },
    {
      category: 'Automation & AI',
      icon: Bot,
      items: [
        { name: 'n8n Workflow Engine', level: 'Advanced' },
        { name: 'Webhook Integrations', level: 'Advanced' },
        { name: 'LLM Agent Tools', level: 'Proficient' },
        { name: 'OpenAI / Claude APIs', level: 'Proficient' },
        { name: 'Process Automation', level: 'Advanced' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      items: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Supabase DB & Auth', level: 'Advanced' },
        { name: 'Supabase Storage', level: 'Advanced' },
        { name: 'MySQL', level: 'Proficient' },
        { name: 'Redis Caching', level: 'Proficient' },
      ],
    },
  ];

  const filteredGroups =
    activeTab === 'All'
      ? groups
      : groups.filter((g) => g.category === activeTab);

  return (
    <section className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#636CF5] uppercase tracking-wider">
            Technical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight mt-2">
            Skills & Tools
          </h2>
          <p className="text-sm text-[#9D9B95] mt-2">
            Categorized technical stack spanning languages, frameworks, cloud tooling, and automation runtimes.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {['All', 'Languages', 'Frontend', 'Backend', 'Cloud & DevOps', 'Automation & AI', 'Databases'].map(
            (tab) => {
              const matchedKey = tab === 'Cloud & DevOps' ? 'Cloud' : tab === 'Automation & AI' ? 'Automation' : tab;
              const isActive = activeTab === matchedKey;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(matchedKey)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#636CF5] text-white shadow-sm'
                      : 'bg-[#141417] text-[#9D9B95] hover:text-[#F0EEEB] border border-[#2A2A30]'
                  }`}
                >
                  {tab}
                </button>
              );
            }
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="bg-[#141417] border border-[#2A2A30] rounded-xl p-6 hover:border-[#636CF5]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#2A2A30]">
                  <div className="p-2 rounded-lg bg-[#222228] text-[#636CF5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F0EEEB]">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#0C0C0E]/50 border border-[#2A2A30]/50"
                    >
                      <span className="text-xs font-medium text-[#F0EEEB]">
                        {item.name}
                      </span>
                      <Badge variant="subtle" className="text-[10px]">
                        {item.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
