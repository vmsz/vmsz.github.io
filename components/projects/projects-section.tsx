'use client';

import { ProjectAccordionItem } from '@/components/projects/project-accordion-item';
import { Accordion } from '@/components/ui/accordion';
import { projects } from '@/lib/projects';

function ProjectsSection() {
  return (
    <section id='projects' className='flex scroll-mt-16 flex-col'>
      <div className='flex flex-col'>
        <h2 className='text-foreground text-lg'>Projetos</h2>
        <p className='text-muted-foreground'>Aqui estão alguns dos meus projetos mais recentes</p>
      </div>
      <Accordion type='single' collapsible className='w-full'>
        {projects.map((project) => (
          <ProjectAccordionItem key={project.title} project={project} />
        ))}
      </Accordion>
    </section>
  );
}

export { ProjectsSection };
