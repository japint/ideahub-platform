import { ReactNode } from 'react';

export interface RoadmapCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  index: number;
  isLast?: boolean;
  targetId: string;
  href?: string;
}

export interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  isAlternate?: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
}

export interface RoadmapItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  targetId: string;
  href?: string;
}
