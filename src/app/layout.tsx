import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dulanga Lakshan | Computer Engineer (Full-Stack, Cloud & Automation)',
  description:
    'Personal portfolio of Dulanga Lakshan showcasing full-stack web applications, cloud & DevOps architectures, and agentic n8n automation runtimes.',
  keywords: [
    'Dulanga Lakshan',
    'Computer Engineer',
    'Full-Stack Developer',
    'DevOps',
    'Next.js Portfolio',
    'Spring Boot',
    'Azure',
    'n8n Automation',
  ],
  authors: [{ name: 'Dulanga Lakshan' }],
  openGraph: {
    title: 'Dulanga Lakshan | Computer Engineer Portfolio',
    description:
      'I engineer systems that build, deploy, and run themselves. Full-stack development, cloud architecture, and AI automations.',
    type: 'website',
    url: 'https://dulangalakshan.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        className="bg-[#0C0C0E] text-[#F0EEEB] antialiased selection:bg-[#636CF5] selection:text-white"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
