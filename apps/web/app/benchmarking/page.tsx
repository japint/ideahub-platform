'use client';

import {} from '@/features';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import {} from '@/features';
import { Footer, Header } from '@/components';
import {
  BenchmarkingDataCards,
  BenchmarkingHero,
  BenchmarkingHowItWorks,
  BenchmarkingTrust,
} from '@/features/benchmarking';

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
