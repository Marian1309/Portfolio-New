'use client';

import type { FC } from 'react';

import CountUp from 'react-countup';

import { STATS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Stats: FC = () => {
  return (
    <section className="pb-32 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto flex-center sm:block">
        <div className="grid max-w-[80vw] grid-cols-2 gap-6 md:grid-cols-4 xl:max-w-none">
          {STATS.map((stat) => (
            <div
              className="flex-1 gap-4 flex-center md:justify-start"
              key={stat.id}
            >
              <CountUp
                className="text-4xl font-extrabold xl:text-6xl"
                delay={1.2}
                duration={3.5}
                end={stat.num}
              />
              <p
                className={cn(
                  'leading-snug text-white/80',
                  stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                )}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
