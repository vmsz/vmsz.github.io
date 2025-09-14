import { Button } from '@/components/ui/button';

interface AboutLinkProps {
  href: string;
  children: React.ReactNode;
}

function AboutLink({ href, children }: AboutLinkProps) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Button variant={'secondary'} className='cursor-pointer'>
        {children}
      </Button>
    </a>
  );
}
export { AboutLink };
