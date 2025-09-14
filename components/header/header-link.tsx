interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <a
      href={href}
      className='text-muted-foreground hover:text-foreground cursor-pointer rounded-sm transition-all duration-100'
    >
      {children}
    </a>
  );
}
export { HeaderLink };
