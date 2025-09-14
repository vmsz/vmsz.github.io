import { HeaderLink } from '@/components/header/header-link';
import { ThemeSwitchButton } from '@/components/theme/theme-switch-button';

function Header() {
  return (
    <header className='bg-background sticky top-0 z-10 flex h-16 w-full items-center justify-center'>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <HeaderLink href='#about'>Sobre</HeaderLink>
          </li>
          <li>
            <HeaderLink href='#projects'>Projetos</HeaderLink>
          </li>
          <li>
            <HeaderLink href='#contact'>Contato</HeaderLink>
          </li>
        </ul>
      </nav>
      <ThemeSwitchButton className='absolute right-0' />
    </header>
  );
}

export { Header };
