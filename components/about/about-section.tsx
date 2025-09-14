import { AboutLink } from '@/components/about/about-link';
import { SkillBadges } from '@/components/skill/skill-badges';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { skills } from '@/lib/skills';
import Avatar from '@/public/avatar.webp';
import Image from 'next/image';
import { FaPaintBrush, FaTools } from 'react-icons/fa';
import { FaDatabase, FaLinkedinIn, FaServer } from 'react-icons/fa6';
import { MdArticle } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';

function AboutSection() {
  return (
    <section className='flex scroll-mt-16 flex-col gap-5' id='about'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <Image src={Avatar} alt='Avatar do Vinícius' className='h-10 w-10 shrink-0' />
          <h1 className='text-foreground text-lg font-medium'>Vinícius Souza</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-muted-foreground'>
            Minha jornada no desenvolvimento web começou em 2021, quando iniciei um curso técnico no
            SENAI. Foi ali que descobri minha paixão por tecnologia e comecei a desenvolver as bases
            do que hoje é minha carreira. Desde então, venho me aprofundando cada vez mais na área,
            combinando prática com teoria.
          </p>
          <p className='text-muted-foreground'>
            Atualmente, estou cursando o ensino superior na PUC, onde continuo expandindo meus
            conhecimentos em desenvolvimento web, design de interfaces e boas práticas de
            programação. Busco constantemente aprender novas tecnologias e aprimorar minhas
            habilidades para entregar soluções eficientes, modernas e centradas no usuário.
          </p>
          <p className='text-muted-foreground'>
            Sou movido por desafios e acredito no poder da tecnologia para transformar ideias em
            experiências digitais impactantes.
          </p>
        </div>
      </div>
      <ul className='flex gap-5'>
        <li>
          <AboutLink href='https://github.com/vmsz'>
            <PiGithubLogoFill className='mb-0.5' />
            GitHub
          </AboutLink>
        </li>
        <li>
          <AboutLink href='https://www.linkedin.com/in/vmsz/'>
            <FaLinkedinIn className='mb-0.5' />
            Linkedin
          </AboutLink>
        </li>
        <li>
          <AboutLink href='/curriculo-vinicius-souza.pdf'>
            <MdArticle className='mb-0.5' />
            Curriculo
          </AboutLink>
        </li>
      </ul>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h2 className='text-foreground text-lg'>Habilidades</h2>
          <p className='text-muted-foreground'>
            Principais linguagens e ferramentas que tenho dominio
          </p>
        </div>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='frontend'>
            <AccordionTrigger>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <FaPaintBrush />
                  <h3 className='text-foreground font-medium'>Front-end</h3>
                </div>
                <p className='text-muted-foreground text-sm'>Interfaces e experiência do usuário</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-wrap gap-2'>
                {skills.frontend.map((skill) => (
                  <li key={skill}>
                    <SkillBadges skill={skill} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='backend'>
            <AccordionTrigger>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <FaServer />
                  <h3 className='text-foreground font-medium'>Back-end</h3>
                </div>
                <p className='text-muted-foreground text-sm'>APIs e integração de sistemas</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-wrap gap-2'>
                {skills.backend.map((skill) => (
                  <li key={skill}>
                    <SkillBadges skill={skill} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='database'>
            <AccordionTrigger>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <FaDatabase />
                  <h3 className='text-foreground font-medium'>Banco de dados</h3>
                </div>
                <p className='text-muted-foreground text-sm'>Gerenciamento de dados e consultas</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-wrap gap-2'>
                {skills.database.map((skill) => (
                  <li key={skill}>
                    <SkillBadges skill={skill} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='tools'>
            <AccordionTrigger>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                  <FaTools />
                  <h3 className='text-foreground font-medium'>Ferramentas</h3>
                </div>
                <p className='text-muted-foreground text-sm'>Programas e tecnologias</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='flex flex-wrap gap-2'>
                {skills.tools.map((skill) => (
                  <li key={skill}>
                    <SkillBadges skill={skill} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export { AboutSection };
