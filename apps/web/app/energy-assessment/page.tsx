'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Input, Label, Textarea, RadioGroup, RadioGroupItem, Checkbox } from '@invictus/ui';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, ArrowRight, Check, Building2, User, Zap, Calendar } from 'lucide-react';

export default function EnergyAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 4;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, isSubmitted]);

  const steps = [
    { number: 1, title: 'Contact Info', icon: User },
    { number: 2, title: 'Facility Overview', icon: Building2 },
    { number: 3, title: 'Energy Context', icon: Zap },
    { number: 4, title: 'Follow-up', icon: Calendar },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center min-h-screen pt-32 pb-32 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl font-semibold mb-4">Request Submitted Successfully</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Our specialists will review your information and contact you within 2 business days.
              </p>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Return to Home
                </Button>
              </Link>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                  Request an Energy Assessment
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Complete the form below to help us understand your needs.
                </p>
              </div>
              {/* Full-width stepper */}
              <div className="mb-10 flex items-center justify-between w-full">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentStep >= step.number ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}`}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 hidden sm:block font-medium">
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 flex-1 mx-2 ${currentStep > step.number ? 'bg-accent' : 'bg-muted'}`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-md">
                {/* STEP 1: CONTACT */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium border-b pb-2">Contact Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input placeholder="Smith" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input placeholder="Acme Corp" />
                    </div>
                  </div>
                )}
                {/* STEP 2: FACILITY OVERVIEW */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium border-b pb-2">Facility Overview</h2>
                    <div className="space-y-4">
                      <Label>What best describes your facility?</Label>
                      <RadioGroup
                        defaultValue="commercial"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {['commercial', 'industrial', 'retail', 'healthcare'].map((v) => (
                          <div
                            key={v}
                            className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors"
                          >
                            <RadioGroupItem value={v} id={v} />
                            <Label htmlFor={v} className="capitalize cursor-pointer w-full">
                              {v} Office
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Square Footage (Approx)</Label>
                        <Input placeholder="50,000" />
                      </div>
                      <div className="space-y-2">
                        <Label>Number of Facilities</Label>
                        <Input type="number" placeholder="1" />
                      </div>
                    </div>
                  </div>
                )}
                {/* STEP 3: CONTEXT */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium border-b pb-2">Energy Context</h2>
                    <div className="space-y-4">
                      <Label>Primary Concerns (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          'Rising costs',
                          'Sustainability',
                          'Efficiency',
                          'Reliability',
                          'Compliance',
                        ].map((c) => (
                          <div
                            key={c}
                            className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50"
                          >
                            <Checkbox id={c} />
                            <Label htmlFor={c} className="cursor-pointer">
                              {c}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {/* STEP 4: FOLLOW-UP */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium border-b pb-2">Preferred Follow-up</h2>
                    <div className="space-y-4">
                      <Label>How should we reach you?</Label>
                      <RadioGroup defaultValue="email" className="grid grid-cols-3 gap-4">
                        {['email', 'phone', 'either'].map((v) => (
                          <div
                            key={v}
                            className="flex items-center space-x-2 border rounded-lg p-3 justify-center"
                          >
                            <RadioGroupItem value={v} id={`m-${v}`} />
                            <Label htmlFor={`m-${v}`} className="capitalize text-xs cursor-pointer">
                              {v}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-4">
                      <Label>Timeline for Assessment</Label>
                      <RadioGroup defaultValue="1-3" className="space-y-3">
                        <div className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap" className="cursor-pointer">
                            As soon as possible
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value="1-3" id="1-3" />
                          <Label htmlFor="1-3" className="cursor-pointer">
                            Within 1-3 months
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10 pt-6 border-t border-border max-w-3xl mx-auto">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className={currentStep === 1 ? 'invisible' : 'hover:bg-muted'}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button
                    onClick={currentStep === totalSteps ? handleSubmit : handleNext}
                    className="bg-accent hover:bg-accent/90 text-white min-w-[140px]"
                  >
                    {currentStep === totalSteps ? 'Submit Request' : 'Continue'}
                    {currentStep === totalSteps ? (
                      <Check className="w-4 h-4 ml-2" />
                    ) : (
                      <ArrowRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8">
                Your data is secured with enterprise-grade encryption.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
