import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'SEO App',
    template: '%s | SEO App',
  },

  description:
    'Website SEO App menggunakan Next.js 15 + TypeScript dan di-deploy dengan Vercel. Dibangun untuk performa, kecepatan, dan optimasi Google Search.',

  keywords: [
    'Next.js SEO',
    'SEO Next.js 15',
    'SEO TypeScript',
    'SEO Vercel',
    'Cara website muncul di Google',
  ],

  metadataBase: new URL('https://seo-ten-sand.vercel.app'),

  alternates: {
    canonical: 'https://seo-ten-sand.vercel.app',
  },

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://seo-ten-sand.vercel.app',
    siteName: 'SEO App',
    title: 'SEO App',
    description:
      'Web SEO App dengan Next.js 15, TypeScript, dan Vercel untuk optimasi mesin pencari.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='id'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
