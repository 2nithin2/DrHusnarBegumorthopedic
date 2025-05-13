import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: keyof typeof import('lucide-react'); // For dynamic icon loading
  dataAiHint?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatarUrl?: string;
}

export const doctorProfileData = {
  name: "Dr. Husnara Begum",
  qualifications: ["BPT", "MPT", "MD in Cupping Therapy", "MD in Acupuncture"],
  imageUrl: "https://picsum.photos/seed/drhusnara/300/300",
  imageAiHint: "professional doctor woman",
  bio: "A dedicated and compassionate physiotherapist with extensive experience in treating a wide range of musculoskeletal and neurological conditions. Dr. Begum is committed to providing patient-centered care and utilizes a holistic approach, integrating modern physiotherapy techniques with traditional therapies like cupping and acupuncture to achieve optimal patient outcomes."
};

export const servicesData: Service[] = [
  { id: "ortho", title: "Orthopedic Physiotherapy", description: "Specialized care for musculoskeletal injuries, joint pain, arthritis, and post-fracture rehabilitation.", iconName: "Bone", dataAiHint: "physical therapy" },
  { id: "pedia", title: "Pediatric Physiotherapy", description: "Gentle and effective therapy for developmental delays, congenital conditions, and injuries in children.", iconName: "Baby", dataAiHint: "child therapy" },
  { id: "neuro", title: "Neurological Physiotherapy", description: "Rehabilitation for conditions like stroke, Parkinson's disease, multiple sclerosis, and spinal cord injuries.", iconName: "Brain", dataAiHint: "brain scan" },
  { id: "pulmo", title: "Pulmonology Care", description: "Respiratory physiotherapy to improve lung function and manage conditions like asthma, COPD, and post-COVID recovery.", iconName: "Lungs", dataAiHint: "lungs diagram" },
  { id: "post-surg", title: "Post-Surgery Rehabilitation", description: "Comprehensive programs to restore mobility, strength, and function after surgical procedures.", iconName: "ActivitySquare", dataAiHint: "recovery fitness" },
  { id: "cupping", title: "Cupping Therapy", description: "Ancient healing technique to relieve pain, reduce inflammation, and promote blood flow.", iconName: "Droplets", dataAiHint: "cupping therapy" },
  { id: "acupuncture", title: "Acupuncture", description: "Traditional Chinese medicine practice involving thin needles to stimulate specific points for pain relief and wellness.", iconName: "Sparkles", dataAiHint: "acupuncture needles" },
];

export const appointmentData = {
  bookingInfo: "Book your appointment easily through Apollo247, Practo, or Google Calendar.",
  apolloLink: "https://www.apollo247.com/", // Placeholder
  practoLink: "https://www.practo.com/", // Placeholder
  googleCalendarLink: "https://calendar.google.com/", // Placeholder
  qrCodeUrl: "https://picsum.photos/seed/bookingqr/150/150",
  qrCodeAiHint: "QR code"
};

export const testimonialsData: Testimonial[] = [
  { id: "t1", quote: "Dr. Begum's expertise and compassionate care made a huge difference in my recovery. Highly recommended!", author: "A. Khan", avatarUrl: "https://picsum.photos/seed/patient1/48/48", },
  { id: "t2", quote: "The pediatric physiotherapy sessions for my child were excellent. We saw significant improvement.", author: "S. Patel", avatarUrl: "https://picsum.photos/seed/patient2/48/48", },
  { id: "t3", quote: "I was suffering from chronic back pain, and the combination of physiotherapy and cupping therapy worked wonders. Thank you, Dr. Begum!", author: "R. Sharma", avatarUrl: "https://picsum.photos/seed/patient3/48/48", },
];

export const contactData = {
  phone: "+91 12345 67890",
  email: "dr.begum.care@example.com",
  whatsappLink: "https://wa.me/911234567890", // Replace with actual number, e.g. https://wa.me/919876543210
  address: "123 Wellness Street, HealthCity, India"
};
