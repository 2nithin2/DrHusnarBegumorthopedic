import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/section-wrapper';
import { doctorProfileData } from '@/lib/data';
import { UserCircle } from 'lucide-react';

export function DoctorProfile() {
  return (
    <SectionWrapper id="profile" aria-labelledby="profile-heading">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="flex justify-center md:justify-start">
          <Card className="overflow-hidden shadow-xl max-w-md">
            <CardContent className="p-0">
              <Image
                src={doctorProfileData.imageUrl}
                alt={`Portrait of ${doctorProfileData.name}`}
                width={500}
                height={500}
                className="aspect-square object-cover"
                data-ai-hint={doctorProfileData.imageAiHint}
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
             <UserCircle className="h-8 w-8 text-primary" />
             <h2 id="profile-heading" className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Meet Dr. Husnara Begum
             </h2>
          </div>
          
          <p className="text-lg text-muted-foreground">
            {doctorProfileData.bio}
          </p>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Qualifications</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {doctorProfileData.qualifications.map((qual) => (
                <Badge key={qual} variant="secondary" className="text-sm px-3 py-1">
                  {qual}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
