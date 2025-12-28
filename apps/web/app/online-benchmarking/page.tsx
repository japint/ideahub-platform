'use client';

import { Footer, Header } from '@/components';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { BenchmarkingForm } from '@/features/benchmarking/components';

export default function OnlineBenchmarking() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-16" />

        <BenchmarkingForm />

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
