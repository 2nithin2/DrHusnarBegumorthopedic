
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
  qualifications: ["BPT", "MPT (Orthopedic Specialist)", "MD in Cupping Therapy", "Diploma in Acupuncture"],
  imageUrl: "https://storage.googleapis.com/project-spark-files_prod/byRImKzUuLzaq1E0R9G1/generated_images/1f8c1464-2581-4114-bc35-9f3e3776b183.png",
  imageAiHint: "doctor illustration",
  bio: "A dedicated and compassionate physiotherapist with extensive experience. Dr. Begum specializes in orthopedic conditions, post-surgical rehabilitation, neurological disorders, pediatric cases, and pulmonology-related issues. She is committed to providing patient-centered care, integrating modern physiotherapy techniques with traditional therapies like cupping and acupuncture to achieve optimal patient outcomes. Home visits are also available."
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
  bookingInfo: "Book your appointment or schedule a home visit easily through Apollo247, our Google Profile, or Google Calendar.",
  apolloLink: "https://apollo247.onelink.me/MGY5/r4upl6qr", 
  practoLink: "https://g.co/kgs/gwknM75", // This is now the Google Profile link
  googleCalendarLink: "https://calendar.google.com/", 
  qrCodeUrl: "https://picsum.photos/seed/bookingqr/150/150",
  qrCodeAiHint: "QR code"
};

export const testimonialsData: Testimonial[] = [
  { id: "t1", quote: "Dr. Begum's expertise and compassionate care made a huge difference in my recovery. Highly recommended!", author: "A. Khan", avatarUrl: "https://picsum.photos/seed/patient1/48/48", },
  { id: "t2", quote: "The pediatric physiotherapy sessions for my child were excellent. We saw significant improvement.", author: "S. Patel", avatarUrl: "https://picsum.photos/seed/patient2/48/48", },
  { id: "t3", quote: "I was suffering from chronic back pain, and the combination of physiotherapy and cupping therapy worked wonders. Thank you, Dr. Begum!", author: "R. Sharma", avatarUrl: "https://picsum.photos/seed/patient3/48/48", },
];

export const contactData = {
  phone: "+91 70930 98048",
  email: "dr.begum.care@example.com",
  whatsappLink: "https://wa.me/917093098048", 
  address: "Apollo Clinic, Shaikpet Main Rd, OU Colony, Shaikpet, Hyderabad, Telangana 500089"
};
