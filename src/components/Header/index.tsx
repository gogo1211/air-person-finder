import { FC } from 'react';

import { Logo } from '../Icons';

export const Header: FC = () => {
  return (
    <header className="h-[5.625rem] flex items-center overflow-hidden">
      <Logo />
    </header>
  );
};
