'use client';

import type { FC } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import AvatarCircle from './avatar-circle';

const Avatar: FC = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
        }}
        initial={{ opacity: 0 }}
      >
        <div className="absolute flex h-[298px] w-[298px] items-center justify-center mix-blend-darken xl:h-[498px] xl:w-[498px]">
          <Image
            alt="avatar"
            className="rounded-full object-contain p-3 lg:p-4"
            fill
            priority
            quality={100}
            src="/avatar.png"
          />
        </div>
      </motion.div>

      <AvatarCircle />
    </div>
  );
};

export default Avatar;
