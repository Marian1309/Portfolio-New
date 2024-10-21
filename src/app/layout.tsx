import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import Header from '@/components/header';
import { FramerMotionProvider, ThemeProvider } from '@/components/providers';
import { PageTransition, StairTransition } from '@/components/transitions';

import './globals.scss';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-new-marian1309.vercel.app'),
  title: 'Marian Pidchashyi | Software Developer',
  description: "Marian's Pidchashyi CV",
  applicationName: 'Portfolio',
  openGraph: {
    title: 'Marian Pidchashyi | Software Developer',
    description:
      "Discover Marian's projects, experience, and expertise in the field of software development.",
    type: 'website',
    url: 'https://portfolio-new-marian109.vercel.app',
    images: [
      {
        url: 'https://portfolio-new-marian1309.vercel.app/opengraph-image.png?85d34bb217557c30',
        width: 1920,
        height: 969,
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
    <ThemeProvider>
      <FramerMotionProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={jetbrainsMono.variable}>
            <Header />

            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </body>
        </html>
      </FramerMotionProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
