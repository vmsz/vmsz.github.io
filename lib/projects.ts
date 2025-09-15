import { Project } from '@/types/project';
import { FaTrowelBricks } from 'react-icons/fa6';

const projects: Project[] = [
  {
    icon: FaTrowelBricks,
    title: 'Software Orso',
    beginDate: '11/2024',
    endDate: '02/2025',
    subtitle: 'Software orçamentista para obras de construção civil',
    description:
      'Contém um algoritmo de guias, salvar e carregar progresso, exportação em PDF e Excel, editor de composições e BDI, itenização automática de todas as tarefas.',
    skills: ['react', 'javascript', 'tailwindcss', 'nodejs', 'postgresql'],
    codeHref: 'https://github.com/vmsz/software-orso',
  },
];

export { projects };
