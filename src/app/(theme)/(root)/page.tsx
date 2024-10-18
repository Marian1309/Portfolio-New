import type { FC } from 'react';

import Link from 'next/link';

import { FiDownload } from 'react-icons/fi';

import { Button } from '@/components/ui/button';

import Avatar from '@/components/avatar';
import Socials from '@/components/socials';
import Stats from '@/components/stats';

const RootPage: FC = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-40 lg:flex-row lg:pb-24 lg:pt-8">
          <div className="order-2 text-center lg:order-1 lg:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>

            <h1 className="pt-4 text-left text-[48px] font-semibold leading-[1.1] xl:text-[80px]">
              Hello I&apos;m <br />{' '}
              <span className="text-accent">Marian Pidchashyi</span>
            </h1>

            <p className="my-5 max-w-[500px] text-left text-white/80">
              I am a highly motivated self-taught Front-end React Developer with
              2+ years of experience in developing user-friendly
              web-applications. Strong creative and analytical skills. No
              experience working in a team yet. Based in Ivano-Frankivsk,
              Ukraine.
            </p>

            <div className="mlg:py-0 flex flex-col items-center gap-8 py-4 md:flex-row lg:justify-start">
              <Link href="https://drive.google.com/file/d/1O4AOJFolx6f61WqAYPGAaZbr8f0XXnkc/view?usp=drive_link">
                <Button
                  aria-label="download cv"
                  className="flex cursor-pointer items-center gap-2 uppercase"
                  size="lg"
                  variant="outline"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="pb-4 md:pb-0 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Avatar />
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
};

export default RootPage;
