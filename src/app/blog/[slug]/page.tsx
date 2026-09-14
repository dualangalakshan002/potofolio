import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import { MDXComponents } from '@/components/blog/MDXComponents';
import { ArrowLeft, Calendar, Clock, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Dulanga Lakshan`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#9D9B95] hover:text-[#636CF5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning Journal</span>
        </Link>

        {/* Post Metadata Header */}
        <header className="space-y-4 pb-6 border-b border-[#2A2A30]">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#9D9B95]">
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#636CF5]" />
              {formatDate(post.date)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#5C5B57]" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F0EEEB] tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {post.tags.map((tag, idx) => (
              <Badge key={idx} variant="subtle">
                #{tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* What I Learned Callout Box */}
        {post.whatILearned && (
          <div className="p-4 sm:p-5 rounded-xl bg-[#141417] border border-[#636CF5]/40 shadow-lg space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#868DF8] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#3ECF71]" />
              <span>Key Takeaway / What I Learned</span>
            </div>
            <p className="text-sm text-[#F0EEEB] leading-relaxed font-medium italic">
              &quot;{post.whatILearned}&quot;
            </p>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} components={MDXComponents} />
        </div>
      </div>
    </article>
  );
}
