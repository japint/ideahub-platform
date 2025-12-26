'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Building2, User, Zap, Calendar } from 'lucide-react';
import { Button, Checkbox, Input, Label, RadioGroup, RadioGroupItem, Textarea } from '@invictus/ui';
import { Footer, Header } from '@/components';

interface EnergyAssessmentProps {
  onComplete?: () => void;
}

export const EnergyAssessment = (props: EnergyAssessmentProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 4;

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
      {/* 1. HEADER - Always at the top */}
      <Header />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SUCCESS VIEW */}
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Request Submitted Successfully
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Our energy specialists will review your information and contact you within 2
                business days.
              </p>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
            </div>
          ) : (
            /* FORM VIEW - ALL INPUTS PRESERVED */
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                  Request an Energy Assessment
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Complete the form below to help us understand your facility's energy needs.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mb-10 flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
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
                      <span className="text-xs text-muted-foreground mt-2 hidden sm:block">
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 w-12 sm:w-24 mx-2 ${currentStep > step.number ? 'bg-accent' : 'bg-muted'}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm">
                {/* STEP 1: CONTACT */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium text-foreground mb-6">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.smith@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input id="company" placeholder="Acme Corporation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" placeholder="Facilities Manager" />
                    </div>
                  </div>
                )}

                {/* STEP 2: FACILITY */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium text-foreground mb-6">Facility Overview</h2>
                    <div className="space-y-2">
                      <Label htmlFor="facilityType">Facility Type</Label>
                      <RadioGroup defaultValue="commercial" className="grid grid-cols-2 gap-4 mt-2">
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="commercial" id="commercial" />
                          <Label htmlFor="commercial" className="cursor-pointer">
                            Commercial Office
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="industrial" id="industrial" />
                          <Label htmlFor="industrial" className="cursor-pointer">
                            Industrial
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="retail" id="retail" />
                          <Label htmlFor="retail" className="cursor-pointer">
                            Retail
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="healthcare" id="healthcare" />
                          <Label htmlFor="healthcare" className="cursor-pointer">
                            Healthcare
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sqft">Approximate Square Footage</Label>
                        <Input id="sqft" placeholder="e.g., 50,000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="numFacilities">Number of Facilities</Label>
                        <Input id="numFacilities" type="number" placeholder="1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Primary Location</Label>
                      <Input id="location" placeholder="City, State" />
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTEXT */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium text-foreground mb-6">Energy Context</h2>
                    <div className="space-y-2">
                      <Label>Primary Energy Concerns</Label>
                      <div className="space-y-3 mt-2">
                        {[
                          'Rising energy costs',
                          'Sustainability goals',
                          'Equipment efficiency',
                          'Regulatory compliance',
                          'Operational reliability',
                        ].map((concern) => (
                          <div key={concern} className="flex items-center space-x-3">
                            <Checkbox id={concern.toLowerCase().replace(/\s/g, '-')} />
                            <Label
                              htmlFor={concern.toLowerCase().replace(/\s/g, '-')}
                              className="font-normal cursor-pointer"
                            >
                              {concern}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Have you conducted an energy assessment before?</Label>
                      <RadioGroup defaultValue="no" className="flex gap-6 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="prev-yes" />
                          <Label htmlFor="prev-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="prev-no" />
                          <Label htmlFor="prev-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="prev-unsure" />
                          <Label htmlFor="prev-unsure">Not sure</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Share challenges..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: FOLLOW-UP */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium text-foreground mb-6">
                      Preferred Follow-up
                    </h2>
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup
                        defaultValue="email"
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="either" id="contact-either" />
                          <Label htmlFor="contact-either">Either</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <RadioGroup defaultValue="1-3" className="space-y-3 mt-2">
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="asap" id="timeline-asap" />
                          <Label htmlFor="timeline-asap">As soon as possible</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                          <RadioGroupItem value="1-3" id="timeline-1-3" />
                          <Label htmlFor="timeline-1-3">Within 1-3 months</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={currentStep === 1 ? 'invisible' : ''}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button
                    onClick={currentStep === totalSteps ? handleSubmit : handleNext}
                    className="bg-accent hover:bg-accent/90 text-white"
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
              <p className="text-sm text-muted-foreground text-center mt-6">
                Your information is kept confidential.
              </p>
            </>
          )}
        </div>
      </main>

      {/* 3. FOOTER - Always at the bottom */}
      <Footer />
    </div>
  );
};
