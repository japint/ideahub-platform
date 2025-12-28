'use client';

// 1. Rename the type import to avoid collision
import type { ContentSection as ContentSectionType } from '@invictus/types';
import React from 'react';

interface Props {
  // 2. Use the renamed type alias
  section: ContentSectionType;
  isAlternate?: boolean;
}

// 3. Keep the component name as is so page.tsx doesn't break
export const ContentSection = ({ section, isAlternate = false }: Props) => {
  const { id, title, subtitle, description, icon } = section;

  return (
    <section
      id={id}
      className={`scroll-mt-16 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ${
        isAlternate ? 'bg-secondary/30' : 'bg-background'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              {subtitle}
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Contact us to learn more about this phase of your energy strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
