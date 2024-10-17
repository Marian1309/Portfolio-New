import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.scss';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

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
      <body className={figtree.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
