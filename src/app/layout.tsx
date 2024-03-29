import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from '@/components/TopNav';
import Providers from '@/components/Providers';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Minh Le',
    default: 'Minh Le | Full Stack Software Developer',
  },
  description:
    'Software Engineer with 7+ years of coding experience and a passion for buidling impactful and high-quality software solutions.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark',
        url: '/assets/minh_le_logo_dark.png',
      },
      {
        media: '(prefers-color-scheme: light',
        url: '/assets/minh_le_logo_light.png',
      },
    ],
  },
  openGraph: {
    title: 'Minh Le | Fullstack Software Developer',
    description:
      'Software Engineer with 7+ years of coding experience and a passion for buidling impactful and high-quality software solutions.',
    url: 'https://minhleq.com/',
    type: 'website',
    images: [
      {
        url: 'https://minhleq.com/assets/home_page.png',
        width: 1600,
        height: 750,
        alt: "Minh Le's Portfolio Image",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light' style={{ colorScheme: 'light' }}>
      <head>{/* <link rel='icon' href='/favicon.ico' sizes='32x32' /> */}</head>
      <body className={inter.className}>
        <Providers>
          <header>
            <TopNav />
          </header>
          <main className='bg-white dark:bg-black px-8'>
            {children}
            <ToastContainer
              position='top-right'
              autoClose={3000}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme='light'
            />
          </main>
          <footer className='pb-4'>
            <p className='text-sm text-gray-500 dark:text-gray-200 text-center'>
              Copyright @ 2024 Minh Le. All rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
