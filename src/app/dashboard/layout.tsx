'use client';
import { useMediaQuery } from '@/hooks/use-media-query';
import MainMenu from './components/main-menu';
import MenuTitleLogo from './components/menu-title-logo';
import MobileMenu from './components/mobile-menu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktopMode = useMediaQuery('(min-width: 768px)');
  return (
    <div className='md:grid md:grid-cols-[250px_1fr] h-screen'>
      <MainMenu className='hidden md:flex' />
      <div className='p-4 border-b flex justify-between md:hidden sticky top-0 left-0 bg-background'>
        <MenuTitleLogo />
        {!isDesktopMode && <MobileMenu />}
      </div>
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4 '>Welcome back, Paradzai</h1>
        {children}
      </div>
    </div>
  );
}
