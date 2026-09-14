import React from 'react';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/content';
import { BlogCard } from '@/components/blog/BlogCard';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learning Journal (Blog) | Dulanga Lakshan',
  description:
    'Engineering journal covering trade-offs, architecture decisions, n8n automations, cloud deployments, and lessons learned in software development.',
};

export default function BlogListingPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#636CF5]/15 text-[#868DF8] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#3ECF71]" />
            <span>Continuous Learning Journal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F0EEEB] tracking-tight">
            Engineering Blog & Field Notes
          </h1>
          <p className="text-base text-[#9D9B95] leading-relaxed">
            When I build or learn something new, I write about it here—complete with screenshots, architecture trade-offs, code snippets, and key takeaways.
          </p>
        </div>

        {/* Blog Post Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#141417] border border-[#2A2A30] rounded-xl p-8">
            <p className="text-sm text-[#9D9B95]">No blog articles published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
