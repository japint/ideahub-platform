import { Building2, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const scrollToSection = (id: string) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const BenchmarkingHero = () => {
  const router = useRouter();
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-accent hover:text-sidebar-accent-foreground mb-6 text-base font-medium transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-8">
            <Building2 className="w-8 h-8 text-accent" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Energy Benchmarking
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Establish a clear baseline of your building's energy performance
          </p>
        </div>
      </div>
    </section>
  );
};
