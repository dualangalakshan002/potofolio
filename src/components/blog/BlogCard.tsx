import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, Lightbulb, ArrowRight, Tag } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

export interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card hoverable className="bg-[#141417] border-[#2A2A30] p-6 flex flex-col justify-between h-full group">
      <div className="space-y-4">
        {/* Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9D9B95]">
          <div className="flex items-center gap-3">
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
        </div>

        {/* Post Title */}
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#636CF5] transition-colors">
          <h3 className="text-xl font-bold text-[#F0EEEB] leading-snug">
            {post.title}
          </h3>
        </Link>

        {/* Post Summary */}
        <p className="text-xs text-[#9D9B95] leading-relaxed line-clamp-3">
          {post.summary}
        </p>

        {/* What I Learned Highlight Callout */}
        {post.whatILearned && (
          <div className="p-3 rounded-lg bg-[#222228]/80 border border-[#636CF5]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#868DF8]">
              <Lightbulb className="w-3.5 h-3.5 text-[#3ECF71]" />
              <span>What I Learned</span>
            </div>
            <p className="text-xs text-[#F0EEEB] leading-normal italic">
              &quot;{post.whatILearned}&quot;
            </p>
          </div>
        )}
      </div>

      {/* Footer Tags & Action */}
      <div className="pt-4 border-t border-[#2A2A30] mt-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {post.tags.slice(0, 3).map((tag, i) => (
            <Badge key={i} variant="subtle" className="text-[10px]">
              #{tag}
            </Badge>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-[#636CF5] hover:text-[#868DF8] transition-colors group/link"
        >
          <span>Read Post</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
