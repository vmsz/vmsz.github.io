import { Skill } from '@/types/skill';

interface Skills {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
}
const skills: Skills = {
  frontend: ['html', 'css', 'tailwindcss', 'javascript', 'typescript', 'react', 'nextjs'],
  backend: ['nodejs', 'java', 'springboot'],
  database: ['mysql', 'postgresql', 'mongodb'],
  tools: ['git', 'docker'],
};

export { skills };
