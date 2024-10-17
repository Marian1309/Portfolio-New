'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {LINKS.map((link) => (
        <Link
          className={cn(
            'font-medium capitalize text-white transition-all hover:text-accent',
            link.path.toLowerCase() === pathname &&
              'border-b-2 border-accent text-accent'
          )}
          href={link.path}
          key={link.id}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
