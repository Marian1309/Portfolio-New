import type { FC } from 'react';

import { m } from 'framer-motion';

const startAnimation = {
  initial: {
    top: '0%'
  },
  animate: {
    top: '100%'
  },
  exit: {
    top: ['100%', '0%']
  }
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs: FC = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <m.div
          animate="animate"
          className="relative h-full w-full bg-white"
          exit="exit"
          initial="initial"
          key={index}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1
          }}
          variants={startAnimation}
        />
      ))}
    </>
  );
};

export default Stairs;
