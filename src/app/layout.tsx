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
    default: "Minh Le's Portfolio Website",
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
        </Providers>
      </body>
    </html>
  );
}
