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
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut'
            }
          }}
          className="fixed h-screen w-screen bg-primary"
          initial={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
