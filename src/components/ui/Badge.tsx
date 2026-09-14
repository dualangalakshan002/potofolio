import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'surface' | 'green' | 'outline' | 'subtle';
  children: React.ReactNode;
}

export function Badge({ className, variant = 'surface', children, ...props }: BadgeProps) {
  const variants = {
    accent: 'bg-[#636CF5]/15 text-[#868DF8] border border-[#636CF5]/30',
    surface: 'bg-[#222228] text-[#F0EEEB] border border-[#2A2A30]',
    green: 'bg-[#3ECF71]/15 text-[#3ECF71] border border-[#3ECF71]/30',
    outline: 'bg-transparent text-[#9D9B95] border border-[#2A2A30]',
    subtle: 'bg-[#141417] text-[#9D9B95] border border-[#2A2A30]/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
