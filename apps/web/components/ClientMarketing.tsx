'use client';
import { HeroSection, CTASection, ContentSection } from '@/features/marketing';

type ContentSectionType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  // add other properties as needed
};

interface ClientMarketingProps {
  contentSections: ContentSectionType[];
}

export function ClientMarketing({ contentSections }: ClientMarketingProps) {
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
