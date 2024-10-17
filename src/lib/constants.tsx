import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

import type { NavigationLink, Project, Social, Stat } from '@/types';

import { Movix, MovixIcon, Spotify, SpotifyIcon } from '@/assets/projects';

export const LINKS: NavigationLink[] = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  // {
  //   id: 2,
  //   name: 'Resume',
  //   path: '/resume'
  // },
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
    text: 'Years of experience',
    more: true
  },
  {
    id: 2,
    num: 13,
    text: 'Projects completed',
    more: false
  },
  {
    id: 3,
    num: 18,
    text: 'Technologies mastered',
    more: false
  },
  {
    id: 4,
    num: 125,
    text: 'Code commmits',
    more: true
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    category: 'Frontend',
    title: 'Movix',
    description:
      '"Movix" allows users to discover a vast collection of movies, TV shows, and actors. It features trending content, popular releases, and top-rated titles, with easy navigation between movies and TV shows. There is also a search function to explore specific titles. The site emphasizes user-friendly exploration of entertainment content.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'React-query' },
      { name: 'Zustand' },
      { name: 'React-player' }
    ],
    image: Movix.src,
    icon: MovixIcon.src,
    live: 'https://movix.marian1309.vercel.app',
    github: 'https://github.com/Marian1309/Movix'
  },
  {
    id: 2,
    num: '02',
    category: 'Fullstack',
    title: 'Spotify',
    description:
      'The application "Spotify Clone" is a music streaming platform that mirrors the features of Spotify. It includes sections like "Liked Songs", "Newest Songs" and a library of popular tracks. Users can browse and play songs from various artists, view their playlists, and explore a wide range of genres. The interface resembles Spotify\'s with options to search, view your library, and manage liked songs.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'Supabase' },
      { name: 'Zustand' },
      { name: 'Use-sound' }
    ],
    image: Spotify.src,
    icon: SpotifyIcon.src,
    live: 'https://spotify.marian1309.vercel.app',
    github: 'https://github.com/Marian1309/Spotify'
  }
];
