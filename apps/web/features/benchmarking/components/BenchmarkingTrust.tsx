import { Lock, Shield, Eye } from 'lucide-react';

export const BenchmarkingTrust = () => {
  return (
    <section className="py-12 sm:py-16 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
            <Lock className="w-6 h-6 text-accent" />
          </div>

          <div>
            <p className="text-foreground font-medium mb-1">Your Data is Secure</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              All information is handled confidentially and used solely for benchmarking and energy
              analysis. We never share your data with third parties without consent.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span>Privacy Protected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
