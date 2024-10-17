'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CiMenuFries } from 'react-icons/ci';

import { LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-white">
              Marian<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex-col gap-8 flex-center">
          {LINKS.map((link) => (
            <Link
              className={cn(
                'text-xl capitalize text-white transition-all hover:text-accent',
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
