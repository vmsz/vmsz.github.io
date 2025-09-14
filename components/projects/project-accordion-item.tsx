import { SkillBadges } from '@/components/skill/skill-badges';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

interface ProjectAccordionItemProps {
  project: Project;
}

function ProjectAccordionItem({ project }: ProjectAccordionItemProps) {
  const ProjectIcon = project.icon;

  return (
    <AccordionItem value={project.title}>
      <AccordionTrigger>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <ProjectIcon />
            <div className='flex items-center gap-1'>
              <h3 className='text-foreground font-medium text-nowrap'>{project.title}</h3>
              <span className='text-muted-foreground text-sm text-nowrap'>-</span>
              <span className='text-muted-foreground text-sm text-nowrap'>
                {project.beginDate} até {project.endDate ? project.endDate : 'o presente'}
              </span>
            </div>
          </div>
          <p className='text-muted-foreground text-sm'>{project.subtitle}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className='flex flex-col gap-4'>
        <p className='text-muted-foreground text-sm font-medium'>{project.description}</p>
        <ul className='flex flex-wrap gap-2'>
          {project.skills.map((skill) => (
            <li key={skill}>
              <SkillBadges skill={skill} />
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap gap-2'>
          <li>
            <a href={project.codeHref} target='_blank' rel='noopener noreferrer'>
              <Button
                size={'sm'}
                className='cursor-pointer'
                variant={'secondary'}
                disabled={!project.codeHref}
              >
                <FaCode className='!size-4.25' />
                Visitar Código
              </Button>
            </a>
          </li>
          <li>
            <a href={project.productionHref} target='_blank' rel='noopener noreferrer'>
              <Button
                size={'sm'}
                className='cursor-pointer'
                variant={'default'}
                disabled={!project.productionHref}
              >
                <FaExternalLinkAlt className='!size-3.5' />
                Visitar Site
              </Button>
            </a>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export { ProjectAccordionItem };
