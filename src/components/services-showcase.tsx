'use client';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import type { Service } from '@/lib/data';
import { servicesData } from '@/lib/data';
import { BriefcaseMedical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = LucideIcons[service.iconName] as LucideIcons.LucideIcon;

  return (
    <Card className="group flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        {IconComponent && <IconComponent className={cn("w-10 h-10 text-primary", "group-hover:scale-110 transition-transform duration-300 ease-out")} />}
        <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function ServicesShowcase() {
  return (
    <SectionWrapper id="services" aria-labelledby="services-heading" className="bg-muted/40">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="group flex items-center justify-center gap-2 cursor-default">
            <BriefcaseMedical className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300 ease-out" />
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Our Services
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive range of physiotherapy and wellness services tailored to your individual needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
