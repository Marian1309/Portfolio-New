import type { NextPage } from 'next';
import Image from 'next/image';

import { Gmail, Telegram } from '@/assets/icons';

const ContactPage: NextPage = () => {
  return (
    <div className="flex h-[calc(80vh-70px)] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold md:text-3xl">
        <span className="text-accent">Don&apos;t be shy!</span> Hit me up! 👇
      </h1>

      <div className="flex flex-col items-start gap-x-6 gap-y-6 pt-10 sm:flex-row">
        <div className="flex items-center justify-center gap-x-3 sm:gap-x-2">
          <Image alt="gmail" height={40} src={Gmail.src} width={40} />

          <div>
            <p className="font-bold">Email</p>
            <p className="hover:text-royalBlue transition-colors">
              pidchashymaryan@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-3 sm:gap-x-2">
          <Image alt="telegram" height={40} src={Telegram} width={40} />

          <div className="flex flex-col gap-1">
            <p className="font-bold">Telegram</p>

            <a
              className="text-white transition-colors hover:text-accent dark:text-white dark:hover:text-accent-hover"
              href="https://t.me/pidchashyi"
            >
              @pidchashyi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
