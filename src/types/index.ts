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
