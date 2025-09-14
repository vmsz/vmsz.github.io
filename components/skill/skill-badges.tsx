import { BaseSkillBadge } from '@/components/skill/base-skill-badge';
import { Skill } from '@/types/skill';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaCss3Alt, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { IoLogoDocker, IoLogoNodejs } from 'react-icons/io5';
import { RiJavaLine, RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiReact, SiSpringboot } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';

interface SkillBadgesProps {
  skill: Skill;
}

function SkillBadges({ skill }: SkillBadgesProps) {
  const badges = {
    html: (
      <BaseSkillBadge className='bg-orange-500'>
        <FaHtml5 className='!size-4' /> HTML
      </BaseSkillBadge>
    ),
    css: (
      <BaseSkillBadge className='bg-blue-500'>
        <FaCss3Alt className='!size-4' /> CSS
      </BaseSkillBadge>
    ),
    tailwindcss: (
      <BaseSkillBadge className='bg-sky-600'>
        <RiTailwindCssFill className='!size-4.5' /> Tailwind CSS
      </BaseSkillBadge>
    ),
    javascript: (
      <BaseSkillBadge className='bg-yellow-600'>
        <RiJavascriptFill className='!size-5' /> JavaScript
      </BaseSkillBadge>
    ),
    typescript: (
      <BaseSkillBadge className='bg-blue-700'>
        <BiLogoTypescript className='!size-5' /> TypeScript
      </BaseSkillBadge>
    ),
    react: (
      <BaseSkillBadge className='bg-sky-700'>
        <SiReact className='!size-4' /> React
      </BaseSkillBadge>
    ),
    nextjs: (
      <BaseSkillBadge className='bg-gray-800'>
        <SiNextdotjs className='!size-3.75' /> Next.js
      </BaseSkillBadge>
    ),
    nodejs: (
      <BaseSkillBadge className='bg-green-800'>
        <IoLogoNodejs className='!size-4' /> Node.js
      </BaseSkillBadge>
    ),
    java: (
      <BaseSkillBadge className='bg-orange-500'>
        <RiJavaLine className='!size-4' /> Java
      </BaseSkillBadge>
    ),
    springboot: (
      <BaseSkillBadge className='bg-green-600'>
        <SiSpringboot className='!size-4' /> Spring Boot
      </BaseSkillBadge>
    ),
    mysql: (
      <BaseSkillBadge className='bg-amber-600'>
        <TbBrandMysql className='!size-4' />
        MySQL
      </BaseSkillBadge>
    ),
    postgresql: (
      <BaseSkillBadge className='bg-blue-600'>
        <BiLogoPostgresql className='!size-4.25' />
        PostgreSQL
      </BaseSkillBadge>
    ),
    mongodb: (
      <BaseSkillBadge className='bg-green-700'>
        <DiMongodb className='!size-4.25' />
        MongoDB
      </BaseSkillBadge>
    ),
    git: (
      <BaseSkillBadge className='bg-orange-500'>
        <FaGitAlt className='!size-4.5' /> Git
      </BaseSkillBadge>
    ),
    docker: (
      <BaseSkillBadge className='bg-blue-600'>
        <IoLogoDocker className='!size-4.5' /> Docker
      </BaseSkillBadge>
    ),
  };

  return badges[skill] ?? null;
}

export { SkillBadges };
