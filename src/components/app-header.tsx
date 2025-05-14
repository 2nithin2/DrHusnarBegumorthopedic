import Link from 'next/link';
import { Stethoscope } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Stethoscope className="h-7 w-7 text-primary" />
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Dr. Husnara Begum
          </span>
        </Link>
        {/* Navigation links can be added here if needed in the future */}
        {/* <nav className="hidden md:flex gap-4">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav> */}
      </div>
    </header>
  );
}
