'use client';

import { useState } from 'react';
import {
  Upload,
  ChevronRight,
  ChevronLeft,
  Check,
  Building,
  Zap,
  FileText,
  Shield,
} from 'lucide-react';

const steps = [
  { number: 1, title: 'Facility Information', icon: Building },
  { number: 2, title: 'Electric Utility', icon: Zap },
  { number: 3, title: 'Gas Utility', icon: Zap },
  { number: 4, title: 'Document Upload', icon: FileText },
  { number: 5, title: 'Authorization', icon: Shield },
];

export const BenchmarkingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [authorized, setAuthorized] = useState(false);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="benchmarking-form" className="py-16 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-4">
          Online Benchmarking Form
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Complete the form below to submit your facility data securely
        </p>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${
                      currentStep === step.number
                        ? 'bg-accent text-accent-foreground shadow-md'
                        : currentStep > step.number
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary text-muted-foreground'
                    }
                  `}
                >
                  {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                </div>
                <span
                  className={`text-xs mt-2 hidden sm:block whitespace-nowrap ${
                    currentStep === step.number
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-px mx-2 transition-colors ${
                    currentStep > step.number ? 'bg-accent' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="border border-border shadow-lg rounded-lg">
          <div className="p-6 sm:p-8">
            {/* Step 1: Facility Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Facility Information</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="facilityName" className="block text-sm font-medium">
                      Facility Name
                    </label>
                    <input
                      id="facilityName"
                      placeholder="Enter facility name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="facilityType" className="block text-sm font-medium">
                      Facility Type
                    </label>
                    <input
                      id="facilityType"
                      placeholder="e.g., Office, Warehouse"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium">
                    Street Address
                  </label>
                  <input
                    id="address"
                    placeholder="Enter street address"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium">
                      City
                    </label>
                    <input
                      id="city"
                      placeholder="City"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="state" className="block text-sm font-medium">
                      State
                    </label>
                    <input
                      id="state"
                      placeholder="State"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="zip" className="block text-sm font-medium">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      placeholder="ZIP"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="sqft" className="block text-sm font-medium">
                      Square Footage
                    </label>
                    <input
                      id="sqft"
                      type="number"
                      placeholder="Total sq ft"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="yearBuilt" className="block text-sm font-medium">
                      Year Built
                    </label>
                    <input
                      id="yearBuilt"
                      type="number"
                      placeholder="e.g., 1995"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Electric Utility */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Electric Utility Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="electricProvider" className="block text-sm font-medium">
                      Electric Utility Provider
                    </label>
                    <input
                      id="electricProvider"
                      placeholder="e.g., Pacific Gas & Electric"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="accountNumber" className="block text-sm font-medium">
                      Account Number
                    </label>
                    <input
                      id="accountNumber"
                      placeholder="Enter account number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="meterNumber" className="block text-sm font-medium">
                      Meter Number
                    </label>
                    <input
                      id="meterNumber"
                      placeholder="Enter meter number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="rateSchedule" className="block text-sm font-medium">
                      Rate Schedule
                    </label>
                    <input
                      id="rateSchedule"
                      placeholder="If known"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Gas Utility */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Gas Utility Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="gasProvider" className="block text-sm font-medium">
                      Gas Utility Provider
                    </label>
                    <input
                      id="gasProvider"
                      placeholder="e.g., SoCalGas"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gasAccountNumber" className="block text-sm font-medium">
                      Account Number
                    </label>
                    <input
                      id="gasAccountNumber"
                      placeholder="Enter account number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gasMeterNumber" className="block text-sm font-medium">
                      Meter Number
                    </label>
                    <input
                      id="gasMeterNumber"
                      placeholder="Enter meter number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <input type="checkbox" id="noGas" className="rounded" />
                  <label htmlFor="noGas" className="text-sm text-muted-foreground cursor-pointer">
                    This facility does not use natural gas
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Document Upload */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Document Upload</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Upload your utility bills from the past 12-24 months. We accept PDF, JPG, and PNG
                  files.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium">Electric Bills</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here, or{' '}
                        <span className="text-accent font-medium">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        PDF, JPG, PNG up to 10MB each
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium">Gas Bills</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here, or{' '}
                        <span className="text-accent font-medium">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        PDF, JPG, PNG up to 10MB each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Authorization */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Authorization</h3>
                </div>

                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    By submitting this form, you authorize our team to access and analyze the
                    provided facility and utility data for the purpose of energy benchmarking and
                    developing strategic recommendations for your organization.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All information will be handled confidentially and in accordance with our
                    privacy policy. Data will only be used for energy analysis and will not be
                    shared with third parties without your explicit consent.
                  </p>
                </div>

                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    id="authorize"
                    checked={authorized}
                    onChange={(e) => setAuthorized(e.target.checked)}
                    className="mt-0.5 rounded"
                  />
                  <label
                    htmlFor="authorize"
                    className="text-sm text-foreground cursor-pointer leading-relaxed"
                  >
                    I authorize the collection and analysis of the submitted facility and utility
                    data for energy benchmarking purposes.
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <label htmlFor="sigName" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="sigName"
                      placeholder="Full name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="sigTitle" className="block text-sm font-medium">
                      Title
                    </label>
                    <input
                      id="sigTitle"
                      placeholder="Your title"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!authorized}
                  className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Form
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
