'use client';
import { HeroSection, CTASection, ContentSection } from '@/features/marketing';

export function ClientMarketing({ contentSections }) {
  return (
    <>
      <HeroSection />
      {contentSections.map((section, i) => (
        <ContentSection key={section.id} section={section} isAlternate={i % 2 === 1} />
      ))}
      <CTASection />
    </>
  );
}
