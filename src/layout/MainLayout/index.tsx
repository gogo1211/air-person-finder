import { FC } from 'react';
import { Header } from '../../components/Header';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="px-4 lg:px-0 w-full lg:w-[64rem] m-auto">
      <Header />
      <main className="min-h-[calc(100vh-5.625rem)]">{children}</main>
    </div>
  );
};
