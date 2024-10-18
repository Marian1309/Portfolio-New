'use client';

import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';

import type { Color } from '@/types';

type Props = {
  children: ReactNode;
};

const ThemeLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    const color = localStorage.getItem('theme-color') as Color;

    document.documentElement.setAttribute('data-theme', color);
  }, []);

  return <>{children}</>;
};

export default ThemeLayout;
