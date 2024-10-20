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
        <Link
          aria-label="social link"
          className={iconStyles}
          href={path}
          key={id}
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
