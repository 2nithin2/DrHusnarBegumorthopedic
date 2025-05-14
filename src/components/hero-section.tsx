import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { doctorProfileData, appointmentData, contactData } from '@/lib/data';
import { CheckCircle2, Phone, Users, ExternalLink } from 'lucide-react';

export function HeroSection() {
  const specializations = [
    "Orthopedic conditions",
    "Post-surgical rehabilitation",
    "Neurological disorders",
    "Pediatric cases",
    "Pulmonology-related conditions",
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-last md:order-first">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-primary">
              Dr. Husnara Begum
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              {doctorProfileData.qualifications.join(' | ')}
            </p>
            <div className="space-y-4 pt-2">
              <h2 className="text-xl font-semibold text-foreground">Specialized in:</h2>
              <ul className="space-y-2">
                {specializations.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-foreground pt-2">
              Book an appointment or schedule a home visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="shadow-md">
                <Link href={appointmentData.apolloLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> Apollo 24/7
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="shadow-md">
                <Link href={appointmentData.practoLink} target="_blank" rel="noopener noreferrer"> {/* practoLink is Google Profile */}
                  <Users className="mr-2 h-5 w-5" /> Google Profile
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-md">
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center order-first md:order-last p-4">
            <Image
              src={doctorProfileData.imageUrl}
              alt={`Portrait of ${doctorProfileData.name}`}
              width={500}
              height={550}
              className="rounded-xl shadow-2xl object-cover aspect-[10/11] max-w-sm w-full md:max-w-md"
              data-ai-hint={doctorProfileData.imageAiHint}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
