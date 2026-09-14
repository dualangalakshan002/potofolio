import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Project } from '@/types';
import { estimateReadingTime } from './utils';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');
const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllProjects(): Project[] {
  try {
    const filePath = path.join(projectsDirectory, 'projects.json');
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const projects: Project[] = JSON.parse(fileContents);
    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }
    const fileNames = fs.readdirSync(blogDirectory);
    const posts: BlogPost[] = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString().split('T')[0],
          tags: data.tags || [],
          summary: data.summary || '',
          readingTime: data.readingTime || estimateReadingTime(content),
          whatILearned: data.whatILearned || data.summary || '',
          content,
          coverImage: data.coverImage,
        };
      })
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}
