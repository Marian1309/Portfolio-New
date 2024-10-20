import type { FC, ReactNode } from 'react';

import { LazyMotion, domAnimation } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const FramerMotionProvider: FC<Props> = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default FramerMotionProvider;
