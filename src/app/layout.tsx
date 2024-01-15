import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/TopNav';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Minh Le',
    default: 'Home | Minh Le',
  },
  description: 'Personal Portfolio Website of Minh Le.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light' style={{ colorScheme: 'light' }}>
      <body className={inter.className}>
        <Providers>
          <header>
            <TopNav />
          </header>
          <main className='bg-white dark:bg-black px-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
