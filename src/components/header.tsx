import type { FC } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Button } from './ui/button';

import Navigation from './navigation';

const DynamicMobileNavigation = dynamic(() => import('./mobile-navigation'));

const DynamicThemeToggle = dynamic(() => import('./theme-toggle'));

const Header: FC = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            Marian<span className="text-accent">.</span>dev
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 xl:flex">
          <DynamicThemeToggle />

          <Navigation />

          <Link href="/contact">
            <Button aria-label="hire ne" className="text-black">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-x-2 xl:hidden">
          <DynamicThemeToggle size={16} />
          <DynamicMobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
