import React from 'react';
import { Clock, Users, Zap, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function StatsRow() {
  const stats = [
    {
      label: 'Experience',
      value: '3+ Years',
      description: 'Building production software',
      icon: Award,
      color: 'text-[#636CF5]',
    },
    {
      label: 'Platform Reach',
      value: '50K Users',
      description: 'Impacted across projects',
      icon: Users,
      color: 'text-[#3ECF71]',
    },
    {
      label: 'Deploy Pipelines',
      value: '< 90s',
      description: 'Automated build to production',
      icon: Zap,
      color: 'text-[#868DF8]',
    },
    {
      label: 'Operations',
      value: '10+ hrs/wk',
      description: 'Saved via n8n & AI automation',
      icon: Clock,
      color: 'text-[#3ECF71]',
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                hoverable
                className="relative overflow-hidden bg-[#141417] border-[#2A2A30] p-5 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#9D9B95] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-lg bg-[#222228] text-[#636CF5] group-hover:scale-110 transition-transform">
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F0EEEB] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#5C5B57] mt-1 font-normal">
                    {stat.description}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
