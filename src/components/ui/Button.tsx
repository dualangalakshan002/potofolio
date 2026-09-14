import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0C0C0E] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-[#636CF5] hover:bg-[#5259e0] text-white shadow-lg shadow-[#636CF5]/20 focus:ring-[#636CF5]',
      secondary:
        'bg-[#222228] hover:bg-[#2A2A30] text-[#F0EEEB] border border-[#2A2A30] focus:ring-[#636CF5]',
      outline:
        'bg-transparent hover:bg-[#141417] text-[#F0EEEB] border border-[#2A2A30] focus:ring-[#636CF5]',
      ghost:
        'bg-transparent hover:bg-[#141417] text-[#9D9B95] hover:text-[#F0EEEB] focus:ring-[#636CF5]',
      green:
        'bg-[#3ECF71] hover:bg-[#34b862] text-[#0C0C0E] font-semibold shadow-md focus:ring-[#3ECF71]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2.5 text-sm gap-2',
      lg: 'px-6 py-3.5 text-base gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
