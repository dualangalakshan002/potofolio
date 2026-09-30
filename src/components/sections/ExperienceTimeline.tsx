import React from 'react';
import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function ExperienceTimeline() {
  const experiences = [
    {
      id: '1',
      title: 'Software Engineer - Intern',
      organization: 'AgentRuntime Labs',
      url: 'https://www.agentruntime.io/',
      period: '06/2026 – Current',
      achievements: [
        'Develop MCP-based automation tools and connectors that expose AgentRuntime workflows, runs, vault services, and platform tools to AI clients, expanding what external agents can safely orchestrate.',
        'Delivered and supported integrations for Cursor, Claude / Claude Code, and ChatGPT — covering local configuration, remote HTTPS access, PAT bearer authentication, and tool discovery.',
        'Engineer and validate Go, TypeScript, and Python SDK components, verifying runtime headers, connector routing, schemas, and client–server communication.',
        'Diagnose and resolve authentication, handshake, schema, connection, and tool-call issues; author setup guides, test checklists, and handover documentation that accelerate onboarding.',
      ],
      badge: 'Internship',
    },
  ];

  /*
  const certifications = [
    {
      id: 'c1',
      title: 'AWS Certified Solutions Architect – Associate',
      organization: 'Amazon Web Services',
      period: 'Issued 2025',
      description:
        'Validated expertise in resilient cloud architectures, Serverless Lambda, VPC networking, and IAM policies.',
      achievements: ['Infrastructure as Code', 'Cloud Security & Compliance'],
      badge: 'Certified',
    },
    {
      id: 'c2',
      title: 'Azure Fundamentals (AZ-900)',
      organization: 'Microsoft',
      period: 'Issued 2025',
      description:
        'Comprehensive knowledge of Azure cloud services, Azure Container Apps, and cost governance.',
      achievements: ['Azure Serverless', 'Container Instances'],
      badge: 'Certified',
    },
    {
      id: 'c3',
      title: 'n8n Workflow & Automation Specialist',
      organization: 'n8n Academy',
      period: 'Issued 2026',
      description:
        'Advanced certification in self-hosted n8n orchestrations, custom node creation, and webhook security.',
      achievements: ['Event Driven Pipelines', 'AI Tool Calling'],
      badge: 'Specialist',
    },
  ];
  */

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Timeline Column */}
          <div className="lg:col-span-12 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636CF5] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight">
                Work Experience
              </h2>
            </div>

            {/* Timeline List */}
            <div className="relative pl-6 border-l-2 border-[#2A2A30] space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#141417] border-2 border-[#636CF5] group-hover:bg-[#636CF5] group-hover:scale-125 transition-all" />

                  <Card hoverable className="bg-[#141417] border-[#2A2A30] p-6 sm:p-8 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-[#F0EEEB]">
                        {exp.title}
                      </h3>
                      <Badge variant="accent" className="px-3 py-1 text-xs">
                        {exp.badge}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#9D9B95] mb-6">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#636CF5] hover:text-[#868DF8] hover:underline flex items-center gap-1.5 transition-colors"
                        >
                          <span>{exp.organization}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-semibold text-[#636CF5]">{exp.organization}</span>
                      )}
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#5C5B57]" /> {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#9D9B95] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF71] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column (Commented Out for Future Use) */}
          {/*
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3ECF71] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Credentials</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#F0EEEB] tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id} hoverable className="bg-[#141417] border-[#2A2A30] p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-[#F0EEEB]">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-medium text-[#636CF5]">
                        {cert.organization}
                      </p>
                    </div>
                    <Badge variant="subtle">{cert.badge}</Badge>
                  </div>

                  <p className="text-xs text-[#9D9B95] mb-3 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#2A2A30]">
                    {cert.achievements.map((tag, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-[#222228] text-[#9D9B95]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
