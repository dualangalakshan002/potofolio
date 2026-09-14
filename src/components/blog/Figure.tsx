'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';

export interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <figure className="my-8 space-y-3">
      {/* Image Wrapper */}
      <div
        onClick={() => setIsZoomed(true)}
        className="relative group cursor-pointer overflow-hidden rounded-xl border border-[#2A2A30] bg-[#141417] shadow-lg"
      >
        <div className="relative w-full aspect-video">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Hover Zoom Overlay */}
        <div className="absolute inset-0 bg-[#0C0C0E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141417]/90 border border-[#2A2A30] text-xs text-[#F0EEEB] font-medium backdrop-blur-md">
            <ZoomIn className="w-3.5 h-3.5 text-[#636CF5]" />
            <span>Click to expand</span>
          </div>
        </div>
      </div>

      {/* Styled Caption Below Image */}
      {caption && (
        <figcaption className="text-center text-xs font-medium text-[#9D9B95] px-4 leading-relaxed italic">
          {caption}
        </figcaption>
      )}

      {/* Zoom Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-[#0C0C0E]/90 backdrop-blur-xl p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#222228] text-[#F0EEEB] border border-[#2A2A30] hover:bg-[#636CF5] transition-colors"
            aria-label="Close image zoom"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-[#2A2A30] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className="w-full h-full object-contain" />
          </div>

          {caption && (
            <p className="mt-4 text-sm text-[#F0EEEB] max-w-xl text-center bg-[#141417] px-4 py-2 rounded-lg border border-[#2A2A30]">
              {caption}
            </p>
          )}
        </div>
      )}
    </figure>
  );
}
