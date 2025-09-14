import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BaseSkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

function BaseSkillBadge({ className, children }: BaseSkillBadgeProps) {
  return <Badge className={cn('h-6 shrink-0 font-bold text-white', className)}>{children}</Badge>;
}

export { BaseSkillBadge };
