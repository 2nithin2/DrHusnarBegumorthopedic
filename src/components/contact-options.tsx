import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { contactData } from '@/lib/data';
import { Phone, Mail, MessageCircle, MapPin, Contact } from 'lucide-react';

export function ContactOptions() {
  return (
    <SectionWrapper id="contact" aria-labelledby="contact-heading">
      <div className="space-y-8">
        <div className="text-center space-y-3">
           <div className="flex items-center justify-center gap-2">
            <Contact className="h-8 w-8 text-primary" />
            <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Get In Touch
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to us through your preferred method.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>Find our contact details and location below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                  {contactData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${contactData.email}`} className="text-foreground hover:text-primary transition-colors">
                  {contactData.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <Link href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  Chat on WhatsApp
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{contactData.address}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
              <CardDescription>Connect with us instantly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild size="lg" className="w-full">
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call Us Now
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <Link href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                </Link>
              </Button>
               <Button asChild variant="outline" size="lg" className="w-full">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" /> Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
