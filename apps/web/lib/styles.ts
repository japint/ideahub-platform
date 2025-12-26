import { cn } from './utils';

export const getRoadmapCardClasses = (isHovered: boolean) =>
  cn(
    'relative flex flex-col items-center text-center p-6 lg:p-8',
    'bg-card rounded-lg border transition-all duration-300 ease-out',
    'w-full cursor-pointer group',
    isHovered
      ? 'scale-[1.03] shadow-card-active border-accent z-10'
      : 'shadow-card border-border hover:shadow-card-hover'
  );

export const getIconClasses = (isHovered: boolean) =>
  cn(
    'w-12 h-12 rounded-full flex items-center justify-center mb-4',
    'transition-all duration-300',
    isHovered ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
  );

export const getHintClasses = (isHovered: boolean) =>
  cn(
    'text-xs font-medium flex items-center gap-1',
    'transition-all duration-300',
    isHovered
      ? 'text-accent opacity-100 translate-y-0'
      : 'text-muted-foreground opacity-0 -translate-y-1'
  );

export const getAccentLineClasses = (isHovered: boolean) =>
  cn(
    'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full',
    'transition-all duration-300 bg-accent',
    isHovered ? 'w-16' : 'w-0'
  );
