import type { IconType } from 'react-icons/lib';

export type NavigationLink = {
  id: number;
  name: string;
  path: string;
};

export type Social = {
  id: number;
  Icon: IconType;
  path: string;
};

export type Stat = {
  id: number;
  num: number;
  text: string;
};

export type Project = {
  id: number;
  num: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Different';
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  icon: string;
  live: string;
  github: string;
};

export type Color = 'Purple' | 'Red' | 'Green' | 'Yellow' | 'Blue' | 'Rose';

export type DropdownColor = {
  id: number;
  color: Color;
};
