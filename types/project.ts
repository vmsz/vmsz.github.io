import { Skill } from '@/types/skill';
import { IconType } from 'react-icons/lib';

export interface Project {
  icon: IconType;
  title: string;
  beginDate: string;
  endDate?: string;
  subtitle: string;
  description: string;
  skills: Skill[];
  codeHref?: string;
  productionHref?: string;
}
