import { Navbar } from '@components/Navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <main>
      <Navbar />

      <div className="h-[calc(100vh-81px)] max-h-[calc(100vh-81px)]">
        {children}
      </div>
    </main>
  );
};
