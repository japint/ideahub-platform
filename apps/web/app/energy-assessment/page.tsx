import { Footer, Header } from '@/components';

import { EnergyAssessment } from '@/features/energy-assessment/components/EnergyAssessmentForm';

export default function EnergyAssessmentPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="relative z-0 flex-grow pt-32 pb-16">
        <EnergyAssessment />
      </main>
      <Footer />
    </div>
  );
}
