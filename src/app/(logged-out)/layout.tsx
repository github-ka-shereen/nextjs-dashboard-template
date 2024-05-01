import { LightDarkToggle } from '@/components/light-dark-toggle';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className='flex flex-col gap-4 min-h-screen items-center p-24 justify-center'>
        {children}
      </div>
      <LightDarkToggle className='fixed top-1/2 right-5'/>
    </>
  );
}
