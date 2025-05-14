import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { HeroSection } from '@/components/hero-section';
import { DoctorProfile } from '@/components/doctor-profile';
import { ServicesShowcase } from '@/components/services-showcase';
import { AppointmentBooking } from '@/components/appointment-booking';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactOptions } from '@/components/contact-options';
import { FloatingActionButton } from '@/components/floating-action-button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <HeroSection />
        <DoctorProfile />
        <ServicesShowcase />
        <AppointmentBooking />
        <TestimonialsSection />
        <ContactOptions />
      </main>
      <FloatingActionButton />
      <AppFooter />
    </div>
  );
}
