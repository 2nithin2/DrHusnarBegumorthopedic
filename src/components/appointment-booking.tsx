
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import { appointmentData } from '@/lib/data';
import { CalendarDays } from 'lucide-react';

export function AppointmentBooking() {
  return (
    <SectionWrapper id="book-appointment" aria-labelledby="appointment-heading">
      <div className="text-center space-y-8">
        <div className="space-y-3">
          <div className="group flex items-center justify-center gap-2 cursor-default">
            <CalendarDays className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300 ease-out" />
            <h2 id="appointment-heading" className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Book Your Appointment
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            {appointmentData.bookingInfo}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Online Booking</CardTitle>
                <CardDescription>Choose your preferred platform to schedule your visit.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full">
                  <Link href={appointmentData.apolloLink} target="_blank" rel="noopener noreferrer">
                    Book on Apollo247
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full">
                  <Link href={appointmentData.practoLink} target="_blank" rel="noopener noreferrer">
                    View Google Profile
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href={appointmentData.googleCalendarLink} target="_blank" rel="noopener noreferrer">
                    Use Google Calendar
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
