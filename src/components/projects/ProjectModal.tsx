'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Trophy, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/types';

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const categoryVariant =
    project.category === 'Full-stack'
      ? 'accent'
      : project.category === 'Cloud'
      ? 'green'
      : project.category === 'Automation'
      ? 'accent'
      : 'subtle';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#141417] border border-[#2A2A30] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#0C0C0E]/70 hover:bg-[#222228] text-[#9D9B95] hover:text-[#F0EEEB] border border-[#2A2A30] transition-colors shadow-lg backdrop-blur-sm focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Hero Image Section */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#222228] border-b border-[#2A2A30]">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#636CF5]/10 via-[#141417] to-[#3ECF71]/10">
                <Layers className="w-12 h-12 text-[#636CF5] mb-2" />
                <span className="text-sm font-mono text-[#9D9B95] uppercase">
                  {project.category}
                </span>
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/30 pointer-events-none" />

            {/* Category & Year Badges */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <Badge variant={categoryVariant}>{project.category}</Badge>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[#0C0C0E]/80 text-[#9D9B95] border border-[#2A2A30] backdrop-blur-sm">
                {project.year}
              </span>
            </div>
          </div>

          {/* Modal Main Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Key Result */}
            <div className="space-y-3">
              {project.result && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#3ECF71]/10 border border-[#3ECF71]/30 text-[#3ECF71] text-xs font-semibold">
                  <Trophy className="w-4 h-4" />
                  <span>{project.result}</span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0EEEB] tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#636CF5] font-semibold">
                About the Project
              </h3>
              <p className="text-sm sm:text-base text-[#9D9B95] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#636CF5] font-semibold">
                  Key Deliverables & Architecture
                </h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#F0EEEB]">
                      <CheckCircle2 className="w-4 h-4 text-[#3ECF71] shrink-0 mt-0.5" />
                      <span className="leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#636CF5] font-semibold">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stackTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#222228] text-[#F0EEEB] border border-[#2A2A30]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#2A2A30]">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#222228] hover:bg-[#2A2A30] text-[#F0EEEB] border border-[#2A2A30] text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#636CF5]" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#636CF5] hover:bg-[#868DF8] text-white text-xs font-semibold shadow-lg shadow-[#636CF5]/20 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#9D9B95] hover:text-[#F0EEEB] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
