import { CONTENT_SECTIONS } from '@/constants/content';

import { RoadmapSection } from '@/features';
import { ClientMarketing } from '@/components/ClientMarketing';

import { Footer, Header } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16" />

      <main>
        <RoadmapSection />
        <ClientMarketing contentSections={CONTENT_SECTIONS} />
      </main>

      <Footer />
    </div>
  );
}
