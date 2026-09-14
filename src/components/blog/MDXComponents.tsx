import React from 'react';
import { Figure } from './Figure';

export const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-extrabold text-[#F0EEEB] mt-8 mb-4 tracking-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-[#F0EEEB] mt-8 mb-4 border-b border-[#2A2A30] pb-2 tracking-tight" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-[#F0EEEB] mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base text-[#9D9B95] leading-relaxed my-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 my-4 text-[#9D9B95] text-base" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 my-4 text-[#9D9B95] text-base" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-[#9D9B95] leading-relaxed" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[#636CF5] bg-[#141417] px-4 py-3 my-6 rounded-r-lg text-sm text-[#F0EEEB] italic" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-xs bg-[#222228] text-[#3ECF71] px-1.5 py-0.5 rounded border border-[#2A2A30]" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="font-mono text-xs bg-[#141417] text-[#F0EEEB] p-4 my-6 rounded-xl border border-[#2A2A30] overflow-x-auto shadow-inner" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#636CF5] hover:text-[#868DF8] underline underline-offset-4 font-medium transition-colors" {...props} />
  ),
  Figure,
};
