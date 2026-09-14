export type ProjectCategory = 'All' | 'Full-stack' | 'Cloud' | 'Automation' | 'Open source';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'Full-stack' | 'Cloud' | 'Automation' | 'Open source';
  year: string;
  result: string; // e.g. "50% latency reduction", "10K req/sec"
  stackTags: string[];
  thumbnail: string;
  architectureDiagram?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  longDescription?: string;
  highlights?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  summary: string;
  readingTime: string; // e.g. "5 min read"
  whatILearned: string; // Highlight summary shown on cards
  content: string; // MDX content
  coverImage?: string;
}

export interface SkillGroup {
  category: 'Languages' | 'Frontend' | 'Backend' | 'Cloud' | 'Automation' | 'Databases';
  icon: string;
  items: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    featured?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string; // e.g. "2023 - Present"
  location?: string;
  description: string;
  achievements: string[];
  type: 'role' | 'certification';
  badge: string;
  credentialUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website_hp?: string; // Honeypot field
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
