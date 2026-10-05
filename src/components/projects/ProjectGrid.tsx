'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-stack', 'Cloud', 'Automation', 'Open source'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#636CF5] text-white shadow-md shadow-[#636CF5]/20'
                  : 'bg-[#141417] text-[#9D9B95] hover:text-[#F0EEEB] border border-[#2A2A30]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Layout */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-[#141417] border border-[#2A2A30] rounded-xl p-8">
          <p className="text-sm text-[#9D9B95]">No projects found for category &quot;{selectedCategory}&quot;.</p>
        </div>
      )}

      {/* Project Preview Popup Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
