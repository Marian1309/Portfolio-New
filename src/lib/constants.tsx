import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

import type {
  DropdownColor,
  NavigationLink,
  Project,
  Social,
  Stat
} from '@/types';

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
    text: 'Years of experience'
  },
  {
    id: 2,
    num: 13,
    text: 'Projects completed'
  },
  {
    id: 3,
    num: 18,
    text: 'Technologies mastered'
  },
  {
    id: 4,
    num: 125,
    text: 'Code commmits'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    category: 'Fullstack',
    title: 'Property Pulse',
    description:
      'The Property Pulse application helps users find the perfect rental properties, such as apartments, houses, studios, townhouses and other types of housing. It has sections for renters who can look for a place to live, as well as for owners who can add their properties for short or long term rentals. There is also a section with recommended and recent objects.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
      { name: 'MongoDB' },
      { name: 'Next-auth' },
      { name: 'Cloudinary' }
    ],
    image: '/projects/images/property-pulse.png',
    icon: '/projects/icons/property-pulse-icon.webp',
    live: 'https://property-pulse-marian1309.vercel.app',
    github: 'https://github.com/Marian1309/PropertyPulse'
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
    image: '/projects/images/spotify.png',
    icon: '/projects/icons/spotify-icon.svg',
    live: 'https://spotify.marian1309.vercel.app',
    github: 'https://github.com/Marian1309/Spotify'
  },
  {
    id: 3,
    num: '03',
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
    image: '/projects/images/movix.jpg',
    icon: '/projects/icons/movix-icon.png',
    live: 'https://movix.marian1309.vercel.app',
    github: 'https://github.com/Marian1309/Movix'
  }
];

export const COLORS: DropdownColor[] = [
  { color: 'Green', id: 1 },
  { color: 'Purple', id: 2 },
  { color: 'Blue', id: 3 },
  { color: 'Yellow', id: 4 },
  { color: 'Red', id: 5 },
  { color: 'Rose', id: 6 }
];
