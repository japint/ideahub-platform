'use client';

import {
  Header,
  Footer,
  BenchmarkingHero,
  BenchmarkingHowItWorks,
  BenchmarkingTrust,
  BenchmarkingDataCards,
} from '@/features';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import {} from '@/features';

export default function Benchmarking() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-16" />

        <BenchmarkingHero />
        <BenchmarkingHowItWorks />
        <BenchmarkingDataCards />
        <BenchmarkingTrust />

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
