import type { FC } from 'react';

import Image from 'next/image';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { PROJECTS } from '@/lib/constants';

import useProject from '@/hooks/use-project';

import WorkSliderButtons from './work-slider-buttons';

const ImageSwiper: FC = () => {
  const { setProject } = useProject();

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(PROJECTS[swiper.activeIndex]);
  };

  return (
    <div className="w-full xl:w-[60%]">
      <Swiper
        className="mb-12 max-h-[470px] xl:min-h-[520px]"
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={30}
      >
        {PROJECTS.map((project) => (
          <SwiperSlide className="w-full" key={project.id}>
            <div className="group relative bg-pink-50/20 flex-center md:min-h-[465px]">
              <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>

              <div className="relative h-full w-full">
                <Image
                  alt={project.title || 'project image'}
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
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[14px] lg:text-[22px] lg:w-[44px] lg:h-[44px] w-[32px] h-[32px] flex-center transition-all"
          containerStyles="flex gap-2 absolute right-0 bottom-[6px] z-20 w-full justify-between"
        />
      </Swiper>

      <p className="relative bottom-[75px] hidden pb-4 text-center xl:block">
        <strong className="text-accent">Just Swipe</strong> an image to change a
        Project.
      </p>
    </div>
  );
};

export default ImageSwiper;
