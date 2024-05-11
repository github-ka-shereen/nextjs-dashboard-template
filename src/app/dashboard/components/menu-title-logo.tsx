import { LaptopIcon } from 'lucide-react';

export default function MenuTitleLogo() {
  return (
    <h4 className='flex items-center gap-2'>
      <LaptopIcon size={40} className='text-primary'/>
      Admin Portal
    </h4>
  );
}
