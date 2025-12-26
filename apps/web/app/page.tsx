import { CONTENT_SECTIONS } from '@/constants/content';
import {
  ContentSection,
  CTASection,
  Footer,
  Header,
  HeroSection,
  RoadmapSection,
} from '@/features';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      <main>
        <HeroSection />
        <RoadmapSection />

        {/* Content sections */}
        {CONTENT_SECTIONS.map((section, index) => (
          <ContentSection key={section.id} section={section} isAlternate={index % 2 === 1} />
        ))}

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
