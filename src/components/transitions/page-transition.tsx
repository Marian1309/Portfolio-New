'use client';

import type { FC, ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const PageTransition: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut'
            }
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
          initial={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
