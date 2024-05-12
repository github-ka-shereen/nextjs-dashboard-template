import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import MenuItem from './menu-item';
import MenuTitleLogo from './menu-title-logo';
import Link from 'next/link';
import { LightDarkToggle } from '@/components/light-dark-toggle';
import { cn } from '@/lib/utils';

export default function MainMenu({className}: {className?: string}) {
  return (
    <nav
      className={cn(`bg-muted overflow-auto p-4 flex flex-col`, className)}
    >
      <header className='border-b dark:border-b-gray-500 border-b-gray-400 pb-4'>
        <MenuTitleLogo />
      </header>
      <ul className='py-4 grow'>
        <MenuItem href='/dashboard'>Dashboard</MenuItem>
        <MenuItem href='/dashboard/teams'>Teams</MenuItem>
        <MenuItem href='/dashboard/employees'>Employees</MenuItem>
        <MenuItem href='/dashboard/account'>Account</MenuItem>
        <MenuItem href='/dashboard/settings'>Settings</MenuItem>
      </ul>
      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-red-300 dark:bg-red-800'>
            PS
          </AvatarFallback>
        </Avatar>
        <Link href='/' className='hover:underline transition-all duration-200'>
          Logout
        </Link>
        <LightDarkToggle className='ml-auto' />
      </footer>
    </nav>
  );
}
