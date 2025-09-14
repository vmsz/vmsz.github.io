import { AboutSection } from '@/components/about/about-section';
import { ContactSection } from '@/components/contact/contact-section';
import { Header } from '@/components/header/header';
import { ProjectsSection } from '@/components/projects/projects-section';

export default function Home() {
  return (
    <div className='bg-background flex h-full w-full justify-center'>
      <div className='flex h-full w-full max-w-7xl flex-col gap-5 px-4'>
        <Header />
        <div className='flex h-full w-full flex-col gap-10 pb-10'>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
