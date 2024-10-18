'use client';

import type { FC } from 'react';

import { FaBroom } from 'react-icons/fa';

import type { Color } from '@/types';

import { COLORS } from '@/lib/constants';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const ThemeToggle: FC = () => {
  const handleColorChange = (color: Color) => {
    document.documentElement.setAttribute('data-theme', color.toLowerCase());
    localStorage.setItem('theme-color', color.toLowerCase());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="default" variant="outline">
          <FaBroom
            className='className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            size={20}
          />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="relative bottom-[45px] right-20 flex gap-x-2"
      >
        {COLORS.map(({ color, id }) => (
          <DropdownMenuItem key={id} onClick={() => handleColorChange(color)}>
            {color}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ThemeToggle;
