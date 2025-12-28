import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import StagingBadge from '@/components/StagingBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Energy Roadmap',
  description: 'Your comprehensive energy management solution',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <body className={inter.className + ' w-full min-h-screen'}>
        <Providers>
          {children}
          <StagingBadge /> {/* This will sit on top of all pages */}
        </Providers>
      </body>
    </html>
  );
}
