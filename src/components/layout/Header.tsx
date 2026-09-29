'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#0C0C0E]/80 backdrop-blur-md py-5 border-b border-[#2A2A30]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F0EEEB] font-bold text-xl tracking-tight group hover:text-[#636CF5] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#636CF5]/15 border border-[#636CF5]/40 flex items-center justify-center text-[#636CF5] group-hover:bg-[#636CF5] group-hover:text-white transition-all">
            <Code2 className="w-4 h-4" />
          </div>
          <span>Dulanga Lakshan<span className="text-[#636CF5]">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141417] border border-[#2A2A30] rounded-full px-4 py-1.5 shadow-inner">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#636CF5] text-white shadow-sm'
                    : 'text-[#9D9B95] hover:text-[#F0EEEB] hover:bg-[#222228]/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141417] text-[#9D9B95] hover:text-[#F0EEEB] border border-[#2A2A30]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#2A2A30] px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#636CF5] text-white'
                      : 'text-[#9D9B95] hover:text-[#F0EEEB] hover:bg-[#141417]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#2A2A30]">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume-Dulanga-Lakshan.pdf"
              className="block w-full"
            >
              <Button variant="outline" size="sm" className="w-full justify-center gap-2">
                <FileText className="w-4 h-4 text-[#636CF5]" />
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
