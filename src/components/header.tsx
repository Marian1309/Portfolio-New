import type { FC } from 'react';

import Link from 'next/link';

import { Button } from './ui/button';

import MobileNavigation from './mobile-navigation';
import Navigation from './navigation';

const Header: FC = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            Marian<span className="text-accent-hover">.</span>dev
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 xl:flex">
          <Navigation />

          <Link href="/contact">
            <Button className="text-black">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
