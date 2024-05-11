import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import Image from 'next/image';
import MainMenu from './main-menu';
import MenuTitleLogo from './menu-title-logo';
import MenuItem from './menu-item';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { LightDarkToggle } from '@/components/light-dark-toggle';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  return (
    <nav className='xl:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src='/menu.svg'
            alt='tablet and mobile menu icon'
            width={40}
            height={40}
            className='cursor-pointer md:hidden'
          />
          <Image
            src='/menu.svg'
            alt='tablet and mobile menu icon'
            width={60}
            height={60}
            className='cursor-pointer hidden md:block'
          />
        </SheetTrigger>
        <SheetContent className='p-0'>
          {/* <MainMenu className='bg-transparent' /> */}
          <nav className={cn(`bg-transparent overflow-auto p-4 flex flex-col`)}>
            <header className='border-b dark:border-b-gray-500 border-b-gray-400 pb-4'>
              <MenuTitleLogo />
            </header>
            <ul className='py-4 grow'>
              <MenuItem href='/dashboard'>
                <SheetPrimitive.Close>Dashboard</SheetPrimitive.Close>
              </MenuItem>

              <MenuItem href='/dashboard/teams'>
                <SheetPrimitive.Close>Our Teams</SheetPrimitive.Close>
              </MenuItem>
              <MenuItem href='/dashboard/employees'>
                <SheetPrimitive.Close>Employees</SheetPrimitive.Close>
              </MenuItem>
              <MenuItem href='/dashboard/account'>
                <SheetPrimitive.Close>Account</SheetPrimitive.Close>
              </MenuItem>
              <MenuItem href='/dashboard/settings'>
                <SheetPrimitive.Close>Settings</SheetPrimitive.Close>
              </MenuItem>
            </ul>
            <footer className='flex gap-2 items-center'>
              <Avatar>
                <AvatarFallback className='bg-red-300 dark:bg-red-800'>
                  PS
                </AvatarFallback>
              </Avatar>
              <Link
                href='/'
                className='hover:underline transition-all duration-200'
              >
                Logout
              </Link>
              <LightDarkToggle className='ml-auto' />
            </footer>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
