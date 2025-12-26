'use client';
import { Button } from '@invictus/ui';
import Link from 'next/link';
import { ArrowRight, FileText, Calendar, Mail } from 'lucide-react';
import { CTAModal } from '@/components/modals';
import { useCTAModal } from '@/features/sections/useCTAModal';
import { ConsultationForm, EnergyAssessment } from '@/features/energy-assessment';

export const CTASection = () => {
  const { modal, openModal, closeModal } = useCTAModal();
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Ready to Transform Your Energy Strategy?
        </h2>
        <p className="text-lg text-enterprise-300 mb-8 max-w-2xl mx-auto">
          Partner with our team to develop a customized roadmap that delivers measurable results for
          your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-medium px-8"
            onClick={() => openModal('assessment')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Request an Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-enterprise-400 bg-transparent text-white hover:bg-white hover:text-enterprise-800"
            onClick={() => openModal('consultation')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Consultation
          </Button>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center text-enterprise-300 hover:text-white transition-colors text-sm"
        >
          <Mail className="w-4 h-4 mr-2" />
          Or contact us with questions
        </Link>

        {/* The Reusable Modal Shell */}
        <CTAModal open={modal !== null} onClose={closeModal}>
          {/* Conditional Content based on the hook's state */}
          {modal === 'assessment' && <EnergyAssessment onComplete={closeModal} />}

          {modal === 'consultation' && <ConsultationForm onComplete={closeModal} />}
        </CTAModal>
      </div>
    </section>
  );
};
