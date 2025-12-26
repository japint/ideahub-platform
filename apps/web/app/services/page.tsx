import { Header, Footer } from '@/features';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function Services() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-16" />

        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-foreground mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive energy management solutions for your organization.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
