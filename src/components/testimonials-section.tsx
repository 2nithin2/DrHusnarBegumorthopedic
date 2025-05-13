import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { SectionWrapper } from '@/components/section-wrapper';
import type { Testimonial } from '@/lib/data';
import { testimonialsData } from '@/lib/data';
import { Users, Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            {testimonial.avatarUrl && <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint="person face" />}
            <AvatarFallback>{testimonial.author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="italic text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" aria-labelledby="testimonials-heading" className="bg-muted/40">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              What Our Patients Say
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            Hear from those who have experienced our care firsthand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
