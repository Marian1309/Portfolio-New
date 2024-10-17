'use client';

import type { FC } from 'react';
import { useState } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Project } from '@/types';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const projects: Project[] = [
  {
    id: 1,
    num: '01',
    category: 'Frontend',
    title: 'Movix',
    description: 'Movix is a project',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }],
    image: '/',
    live: 'https://movix.marian1309.vercel.app',
    github: 'https://github.com/Marian1309/Movix'
  }
];

const WorkPage: FC = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex-col py-12 flex-center xl:px-0"
      initial={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl font-extrabold leading-none">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {stack.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group h-[70px] w-[70px] rounded-full bg-white/5 flex-center">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="text-white">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group h-[70px] w-[70px] rounded-full bg-white/5 flex-center">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="text-white">Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">Slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
