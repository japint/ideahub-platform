import { ClipboardList, Upload, BarChart3, ChevronRight } from 'lucide-react';

const steps = [
  { icon: ClipboardList, label: 'Provide Facility Info' },
  { icon: Upload, label: 'Upload Utility Data' },
  { icon: BarChart3, label: 'Establish Baseline' },
];

export const BenchmarkingHowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-12">
          How It Works
        </h2>
        <div
          className="flex flex-col sm:flex-row items-stretch justify-center gap-8 overflow-x-auto pb-2 pt-6"
          style={{ overflow: 'visible' }}
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center min-w-[180px]">
              <div className="flex flex-col items-center text-center w-full">
                <div
                  className="relative w-16 h-16 mb-4 flex items-center justify-center"
                  style={{ overflow: 'visible', paddingTop: '18px' }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base shadow border-2 border-background z-10">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:scale-105">
                    <step.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground max-w-[120px]">
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:flex items-center px-6">
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
