'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { m } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import useProject from '@/hooks/use-project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import ImageSwiper from '@/components/image-swiper';

const WorkPage: NextPage = () => {
  const { project } = useProject();

  return (
    <m.section
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' }
      }}
      className="xl:px-0 xl:py-16"
      initial={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center xl:flex-row xl:gap-[32px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center justify-between px-1">
                <div className="text-8xl font-extrabold leading-none">
                  {project.num}
                </div>

                <h2 className="flex items-center justify-start gap-x-2 text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                  <p className="xs:max-w-[200px] max-w-[200px] text-[32px] sm:max-w-full">
                    {project.title}
                  </p>

                  <Image alt="icon" height={36} src={project.icon} width={36} />
                </h2>
              </div>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((stack, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {stack.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              <div className="gap-4 pb-8 flex-center md:justify-start">
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

          <p className="block pb-4 text-center xl:hidden">
            <strong className="text-accent">Just Swipe</strong> an image to
            change a Project.
          </p>

          <ImageSwiper />
        </div>
      </div>
    </m.section>
  );
};

export default WorkPage;
