'use client';

import { useState } from 'react';
import { Button } from '@invictus/ui';

interface ConsultationFormProps {
  onComplete?: () => void;
}

export const ConsultationForm = ({ onComplete }: ConsultationFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-enterprise-50 rounded-lg">
        <h3 className="text-xl font-bold text-enterprise-800">Booking Confirmed</h3>
        <p className="text-enterprise-600 mt-2">
          Our engineers will review the Mukuyu Field data and contact you.
        </p>
        <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
          Schedule Another
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Schedule a Consultation</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar Column */}
        <div className="flex flex-col items-center">
          {/* Add your Calendar component here */}
          <p className="text-muted-foreground italic">Calendar Selection Mock</p>
        </div>

        {/* Form Details Column */}
        <div className="space-y-4">
          {/* Form inputs go here */}
          <Button
            className="w-full"
            onClick={() => {
              setIsSubmitted(true);
              onComplete?.();
            }}
          >
            Confirm Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
