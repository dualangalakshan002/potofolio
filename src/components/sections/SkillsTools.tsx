'use client';

import React, { useState } from 'react';
import { Cpu, Wrench } from 'lucide-react';

export function SkillsTools() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const technicalList = [
    'go',
    'Java',
    'JavaScript',
    'Node.Js',
    'Model Context Protocol(MCP)',
    'REST APIs',
    'React',
    'Tailwind CSS',
    'PostgreSQL',
    'Mongo DB',
    'Docker',
    'Jenkins',
    'Terraform',
    'Git',
    'CI/CD',
    'Oracle Cloud',
    'Azure',
  ];

  const toolsList = [
    'VS Code',
    'Github',
    'Figma',
    'Cursor',
    'WSL',
    'Jira',
  ];

  const skillGroups = [
    {
      category: 'Technical',
      icon: Cpu,
      items: technicalList,
    },
    {
      category: 'Tools',
      icon: Wrench,
      items: toolsList,
    },
  ];

  const filteredGroups =
    activeTab === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold text-[#636CF5] uppercase tracking-wider">
              Stack & Environment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight mt-2">
              Skills & Tools
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            {['All', 'Technical', 'Tools'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#636CF5] text-white shadow-sm'
                      : 'bg-[#141417] text-[#9D9B95] hover:text-[#F0EEEB] border border-[#2A2A30]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid View of Skills & Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="bg-[#141417] border border-[#2A2A30] rounded-xl p-6 hover:border-[#636CF5]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#2A2A30]">
                  <div className="p-2 rounded-lg bg-[#222228] text-[#636CF5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F0EEEB]">
                    {group.category}
                  </h3>
                  <span className="ml-auto text-xs text-[#9D9B95]">
                    {group.items.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-[#0C0C0E] border border-[#2A2A30] text-xs font-medium text-[#F0EEEB] hover:border-[#636CF5]/60 hover:text-[#636CF5] transition-colors"
                    >
                      {item}
                    </span>
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
