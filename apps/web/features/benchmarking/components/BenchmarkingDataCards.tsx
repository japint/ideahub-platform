'use client';

import { useState } from 'react';

import { Monitor, FileDown, ArrowRight, CheckCircle } from 'lucide-react';
import { BenchmarkingForm } from './BenchmarkingForm';

export const BenchmarkingDataCards = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="py-16 sm:py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-4">
          Submit Your Data
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose the method that works best for your organization
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative overflow-hidden border-2 border-accent bg-card shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                <CheckCircle className="w-3 h-3" />
                Recommended
              </span>
            </div>

            <div className="p-8 pt-12">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">Submit Data Online</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete our secure online form to submit your facility information and utility
                data. Fastest way to get started.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Start Online Benchmarking
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              {showForm && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-end bg-black/40"
                  onClick={() => setShowForm(false)}
                >
                  <div
                    className="bg-background w-full max-w-4xl h-full shadow-xl p-10 overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-4 right-4 text-2xl"
                      onClick={() => setShowForm(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <BenchmarkingForm />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg">
            <div className="p-8 pt-12">
              <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center mb-6">
                <FileDown className="w-7 h-7 text-muted-foreground" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Download Data Collection Form
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Prefer to work offline? Download our PDF form to collect information at your own
                pace, then email it to our team.
              </p>

              <button className="w-full border border-border text-foreground hover:bg-secondary/50 font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                Download PDF Form
                <FileDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
