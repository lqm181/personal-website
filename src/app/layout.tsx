import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/TopNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Minh Le',
    default: 'Home | Minh Le',
  },
  description: 'Personal Portfolio Website of Minh Le.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TopNav />
        <div className='px-8'>{children}</div>
      </body>
    </html>
  );
}
