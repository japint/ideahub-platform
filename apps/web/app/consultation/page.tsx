'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // ✅ Next.js optimized routing
import {
  Button,
  Input,
  Label,
  Textarea,
  Calendar, // ✅ From @invictus/ui
} from '@invictus/ui';
import { Header, Footer } from '@/components'; // ✅ Canonical layout components
import { ArrowLeft, Check, Clock, Video, Phone } from 'lucide-react';

export default function ConsultationPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ UX: Smooth scroll to top on success
  useEffect(() => {
    if (isSubmitted) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isSubmitted]);

  const availableTimes = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* pt-32 clears the fixed header; pb-24 ensures visibility above footer */}
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            /* SUCCESS VIEW */
            <div className="max-w-2xl mx-auto text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Consultation Scheduled
              </h1>
              <p className="text-muted-foreground mb-2">
                Your consultation has been scheduled for:
              </p>
              <p className="text-lg font-medium text-foreground mb-8">
                {date?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                at {selectedTime}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                You will receive a calendar invitation and video link at the email address provided.
              </p>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
            </div>
          ) : (
            /* SCHEDULING VIEW */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline mb-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Link>
              </div>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                  Schedule a Consultation
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Book a 30-minute introductory call with one of our energy specialists. Explore how
                  we can optimize your facility.
                </p>
              </div>

              {/* Meeting Meta */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
                  <Video className="w-4 h-4 text-accent" />
                  <span>Video Call</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Phone Available</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar Section */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-medium text-foreground mb-4">1. Select a Date</h2>
                  <div className="w-full border rounded-xl p-2 bg-background">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date: Date) =>
                        date < new Date() || date.getDay() === 0 || date.getDay() === 6
                      }
                      className="rounded-md border pointer-events-auto"
                    />
                  </div>
                  {date && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-foreground mb-3">
                        Available Times for{' '}
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                          <Button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-accent text-white border-accent'
                                : 'border-border hover:bg-muted/50 text-foreground'
                            }`}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Form Area */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    2. Your Details
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" className="h-11" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Acme Corp" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topics">Discussion Topics</Label>
                      <Textarea
                        id="topics"
                        placeholder="E.g. Solar feasibility, cost reduction..."
                        className="min-h-[100px] rounded-xl"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={!date || !selectedTime}
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-white mt-6 text-base font-semibold transition-transform active:scale-95"
                    >
                      Confirm Booking
                      <Check className="w-5 h-5 ml-2" />
                    </Button>

                    {!selectedTime && (
                      <p className="text-xs text-muted-foreground text-center animate-pulse">
                        Select a date and time to enable booking
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-12">
                Information is strictly used for the consultation and protected by our security
                policy.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
