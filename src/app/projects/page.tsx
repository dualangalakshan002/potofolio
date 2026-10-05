import React from 'react';
import { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects | Dulanga Lakshan - Computer Engineer',
  description:
    'Explore engineering projects spanning full-stack web platforms, cloud architectures, DevOps pipelines, and AI automation engines.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#636CF5]/15 text-[#868DF8] text-xs font-semibold">
            <span>Portfolio Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F0EEEB] tracking-tight">
            Featured Projects
          </h1>
          <p className="text-base text-[#9D9B95] leading-relaxed">
            Real-world systems and automation workflows engineered with architectural depth, concrete metrics, and zero-cost cloud services.
          </p>
        </div>

        {/* Filterable Project Grid */}
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
