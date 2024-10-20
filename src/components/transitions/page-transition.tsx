'use client';

import type { FC, ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence, m } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <m.div
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeInOut'
          }
        }}
        className="bg-primary"
        initial={{ opacity: 0 }}
        key={pathname}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default PageTransition;
