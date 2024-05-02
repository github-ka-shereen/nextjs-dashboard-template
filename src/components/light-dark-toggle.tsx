'use client';

import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

type Props = {
    className?: string;
}

export function LightDarkToggle({className}:Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((prevValue) => !prevValue);
            document.body.classList.toggle('dark');
          }}
        >
          {isDarkMode ? (
            <div className='rounded-full border-2 flex items-center gap-2 p-3'>
              <p>Dark Mode</p>
              <MoonIcon />
            </div>
          ) : (
            <div className='rounded-full border-2 flex items-center gap-2 p-3'>
              <p>Light Mode</p>
              <SunIcon />
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Enable light mode' : 'Enable dark  mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
