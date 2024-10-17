import type { FC } from 'react';

import Link from 'next/link';

import { SOCIALS } from '@/lib/constants';

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Socials: FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIALS.map(({ id, path, Icon }) => (
        <Link className={iconStyles} href={path} key={id}>
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
