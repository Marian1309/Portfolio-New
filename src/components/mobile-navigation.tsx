'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CiMenuFries } from 'react-icons/ci';

import { LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger aria-label="mobile menu" className="flex-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent
        aria-describedby="mobile navigation"
        className="flex flex-col"
      >
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-white">
              Marian<span className="text-accent">.</span>dev
            </h1>
          </Link>
        </div>

        <nav className="flex-col gap-8 flex-center">
          {LINKS.map((link) => (
            <SheetClose asChild key={link.id}>
              <Link
                className={cn(
                  'text-xl capitalize text-white transition-all hover:text-accent',
                  link.path.toLowerCase() === pathname &&
                    'border-b-2 border-accent text-accent'
                )}
                href={link.path}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
