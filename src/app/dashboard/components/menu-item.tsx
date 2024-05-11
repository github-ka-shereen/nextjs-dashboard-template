'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: Props) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li>
      <Link
        className={cn(
          'block p-2  hover:bg-gray-300 dark:hover:bg-zinc-700 rounded-lg text-muted-foreground hover:text-foreground',
          isActive &&
            'bg-primary rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
        )}
        href={href}
      >
        <div className='ml-2'>{children}</div>
      </Link>
    </li>
  );
}
