'use client';
import { Button } from '@invictus/ui';
import Link from 'next/link';
import { ArrowRight, FileText, Calendar, Mail } from 'lucide-react';
// Modal logic removed; now using direct links for both actions

export const CTASection = () => {
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
          <Link href="/energy-assessment" passHref legacyBehavior>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium px-8">
              <FileText className="w-4 h-4 mr-2" />
              Request an Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/consultation" passHref legacyBehavior>
            <Button
              size="lg"
              variant="outline"
              className="border-enterprise-400 bg-transparent text-white hover:bg-white hover:text-enterprise-800"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Consultation
            </Button>
          </Link>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center text-enterprise-300 hover:text-white transition-colors text-sm"
        >
          <Mail className="w-4 h-4 mr-2" />
          Or contact us with questions
        </Link>
      </div>
    </section>
  );
};
