import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsRow } from '@/components/sections/StatsRow';
import { AboutMe } from '@/components/sections/AboutMe';
import { WhatIDo } from '@/components/sections/WhatIDo';
import { SkillsTools } from '@/components/sections/SkillsTools';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <StatsRow />
      <AboutMe />
      <WhatIDo />
      <SkillsTools />
      <ExperienceTimeline />
      <CtaBanner />
    </div>
  );
}
