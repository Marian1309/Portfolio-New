'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { PROJECTS } from '@/lib/constants';

import useProject from '@/hooks/use-project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import WorkSliderButtons from '@/components/work-slider-buttons';

const WorkPage: NextPage = () => {
  const { project, setProject } = useProject();

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex: number = swiper.activeIndex;

    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
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

          <div className="w-full xl:w-[60%]">
            <Swiper
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
              slidesPerView={1}
              spaceBetween={30}
            >
              {PROJECTS.map((project, index) => (
                <SwiperSlide className="w-full" key={index}>
                  <div className="group relative bg-pink-50/20 flex-center md:min-h-[465px]">
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>

                    <div className="relative h-full w-full">
                      <Image
                        alt="project"
                        className="h-full w-full object-cover md:min-h-[470px]"
                        height={1000}
                        quality={100}
                        src={project.image}
                        width={1000}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderButtons
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex-center transition-all"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between"
              />
            </Swiper>

            <p className="relative bottom-[75px] hidden pb-4 text-center xl:block">
              <strong className="text-accent">Just Swipe</strong> an image to
              change a Project.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
