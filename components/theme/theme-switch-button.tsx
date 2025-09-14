'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface ThemeSwitchButtonProps {
  className?: string;
}

function ThemeSwitchButton({ className }: ThemeSwitchButtonProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant={'secondary'}
      className={cn('text-muted-foreground hover:text-foreground cursor-pointer', className)}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={`Mudar para tema ${resolvedTheme === 'dark' ? 'claro' : 'escuro'}`}
      title={`Mudar para tema ${resolvedTheme === 'dark' ? 'claro' : 'escuro'}`}
    >
      {resolvedTheme === 'dark' ? (
        <MdLightMode className='!size-5' />
      ) : (
        <MdDarkMode className='!size-5' />
      )}
    </Button>
  );
}
export { ThemeSwitchButton };
