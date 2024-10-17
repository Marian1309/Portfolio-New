import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import './globals.scss';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: 'Next.js 14',
  description: 'Next.js 14 Starter'
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
