import React from 'react';
import { ExternalLink, Layers, Trophy } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/types';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryVariant =
    project.category === 'Full-stack'
      ? 'accent'
      : project.category === 'Cloud'
      ? 'green'
      : project.category === 'Automation'
      ? 'accent'
      : 'subtle';

  return (
    <Card hoverable className="bg-[#141417] border-[#2A2A30] flex flex-col justify-between h-full p-0 overflow-hidden group">
      {/* Thumbnail / Header graphic */}
      <div className="relative w-full h-48 bg-[#222228] border-b border-[#2A2A30] overflow-hidden flex items-center justify-center">
        {/* Abstract Tech Graphic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#636CF5]/10 via-[#141417] to-[#3ECF71]/10 opacity-70 group-hover:scale-105 transition-transform duration-500" />
        
        <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#141417] border border-[#2A2A30] flex items-center justify-center text-[#636CF5] shadow-lg group-hover:border-[#636CF5]/50 transition-colors">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-[#9D9B95] tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-20">
          <Badge variant={categoryVariant}>{project.category}</Badge>
        </div>

        {/* Year Pill */}
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#0C0C0E]/80 text-[#9D9B95] border border-[#2A2A30]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Result Metric Banner */}
          {project.result && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3ECF71]/10 border border-[#3ECF71]/30 text-[#3ECF71] text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5" />
              <span>{project.result}</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-[#F0EEEB] group-hover:text-[#636CF5] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-[#9D9B95] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-3 pt-2 border-t border-[#2A2A30]/60">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stackTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#222228] text-[#9D9B95] border border-[#2A2A30]/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Card Links */}
          <div className="flex items-center justify-between pt-2 text-xs">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#9D9B95] hover:text-[#F0EEEB] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#636CF5]" />
                <span>Repository</span>
              </a>
            ) : <span />}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#636CF5] hover:text-[#868DF8] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
