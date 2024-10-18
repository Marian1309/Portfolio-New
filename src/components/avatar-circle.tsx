'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';

const AvatarCircle: FC = () => {
  const themeColor = {
    purple: '262.1 83.3% 57.8%',
    green: '142.1 76.2% 36.3%'
  };

  return (
    <motion.svg
      className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        animate={{
          strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
          rotate: [120, 360]
        }}
        cx="253"
        cy="253"
        initial={{ strokeDasharray: '24 10 0 0' }}
        r="250"
        stroke={`hsl(${themeColor.purple})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </motion.svg>
  );
};

export default AvatarCircle;
