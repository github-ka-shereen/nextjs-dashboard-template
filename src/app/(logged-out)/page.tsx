import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-red-500' /> Admin
        Dashboard
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/login'>Log In</Link>
        </Button>

        <small>OR</small>
        <Button asChild variant='outline'>
          <Link href='/sign-up'>Sign Up </Link>
        </Button>
      </div>
    </>
  );
}
