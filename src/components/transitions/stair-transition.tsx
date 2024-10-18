'use client';

import type { FC } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

import Stairs from '../stairs';

const StairTransition: FC = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence key={pathname}>
      <div key={pathname}>
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
          <Stairs />
        </div>

        <motion.div
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
          }}
          className="pointer-events-none fixed h-screen w-screen bg-primary"
          initial={{ opacity: 0 }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
