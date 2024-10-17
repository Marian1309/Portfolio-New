import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import Header from '@/components/header';
import { PageTransition, StairTransition } from '@/components/transitions';

import './globals.scss';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: 'Marian Pidchashyi | Software Developer',
  description: "Marian's Pidchashyi CV",
  openGraph: {
    title: 'Marian Pidchashyi | Software Developer',
    description:
      "Discover Marian's projects, experience, and expertise in the field of software development.",
    type: 'website',
    url: 'https://portfolio-new-marian109.vercel.app',
    images: [
      {
        url: 'https://portfolio-new-marian109.vercel.app/favicon.ico',
        width: 40,
        height: 40,
        alt: "Marian's Pidchashyi Portfolio"
      }
    ]
  }
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <Header />

        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
