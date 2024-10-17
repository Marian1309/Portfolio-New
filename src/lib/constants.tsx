import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

import type { NavigationLink, Social, Stat } from '@/types';

export const LINKS: NavigationLink[] = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Resume',
    path: '/resume'
  },
  {
    id: 3,
    name: 'Work',
    path: '/work'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  }
];

export const SOCIALS: Social[] = [
  {
    id: 1,
    Icon: FaGithub,
    path: 'https://github.com/Marian1309'
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    path: 'https://www.linkedin.com/in/marian-pidchashyi'
  },
  {
    id: 3,
    Icon: FaTelegram,
    path: 'https://t.me/pidchashyi'
  }
];

export const STATS: Stat[] = [
  {
    id: 1,
    num: 2,
    text: 'Years of experience'
  },
  {
    id: 2,
    num: 24,
    text: 'Projects completed'
  },
  {
    id: 3,
    num: 13,
    text: 'Technologies mastered'
  },
  {
    id: 4,
    num: 125,
    text: 'Code commmits'
  }
];
