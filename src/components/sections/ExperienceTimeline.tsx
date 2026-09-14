import React from 'react';
import { Briefcase, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TimelineItem } from '@/types';

export function ExperienceTimeline() {
  const experiences: TimelineItem[] = [
    {
      id: '1',
      title: 'Full-Stack & Automation Engineer',
      organization: 'Affin Technologies',
      period: '2024 - Present',
      location: 'Sri Lanka',
      description:
        'Architecting enterprise HRM platforms, microservice auth gateways, and serverless workflow automation pipelines.',
      achievements: [
        'Designed modular User & HR microservice backends using Spring Boot and Spring Security JWT.',
        'Built automated n8n workflow engine saving 10+ operational hours per week across teams.',
        'Engineered responsive Next.js frontend modules with dynamic PDF report generators.',
      ],
      type: 'role',
      badge: 'Full-Time',
    },
    {
      id: '2',
      title: 'Software & Cloud Engineering Intern',
      organization: 'TechStack Solutions',
      period: '2023 - 2024',
      location: 'Sri Lanka',
      description:
        'Developed cloud-native APIs, containerized microservices, and continuous integration workflows.',
      achievements: [
        'Containerized 5 legacy services into Dockerized microservices deployed on cloud container instances.',
        'Reduced deployment validation times from 15 minutes down to 90 seconds using GitHub Actions.',
        'Implemented database indexing and query optimization on PostgreSQL databases.',
      ],
      type: 'role',
      badge: 'Internship',
    },
    {
      id: '3',
      title: 'Undergraduate Computer Engineer',
      organization: 'University Engineering Faculty',
      period: '2021 - 2025',
      location: 'Sri Lanka',
      description:
        'Completed Bachelor of Science in Computer Engineering with focus on embedded systems, OS internals, and distributed networks.',
      achievements: [
        'Published research project on distributed edge computing and real-time sensor pipelines.',
        'Led university coding hackathon team achieving 1st place in cloud automation challenge.',
      ],
      type: 'role',
      badge: 'Education',
    },
  ];

  const certifications: TimelineItem[] = [
    {
      id: 'c1',
      title: 'AWS Certified Solutions Architect – Associate',
      organization: 'Amazon Web Services',
      period: 'Issued 2025',
      description:
        'Validated expertise in resilient cloud architectures, Serverless Lambda, VPC networking, and IAM policies.',
      achievements: ['Infrastructure as Code', 'Cloud Security & Compliance'],
      type: 'certification',
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
      type: 'certification',
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
      type: 'certification',
      badge: 'Specialist',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-[#2A2A30]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Timeline Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#636CF5] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#F0EEEB] tracking-tight">
                Work Experience
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 border-l-2 border-[#2A2A30] space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#141417] border-2 border-[#636CF5] group-hover:bg-[#636CF5] group-hover:scale-125 transition-all" />

                  <Card hoverable className="bg-[#141417] border-[#2A2A30] p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#F0EEEB]">
                        {exp.title}
                      </h3>
                      <Badge variant="accent">{exp.badge}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#9D9B95] mb-3">
                      <span className="font-medium text-[#636CF5]">{exp.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#5C5B57]" /> {exp.period}
                      </span>
                      {exp.location && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#5C5B57]" /> {exp.location}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-[#9D9B95] mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#F0EEEB]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF71] mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
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
                    <Badge variant="green">{cert.badge}</Badge>
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
        </div>
      </div>
    </section>
  );
}
