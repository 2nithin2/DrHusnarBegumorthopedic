import Link from 'next/link';

export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dr. Husnara Begum. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Developed by{' '}
            <Link
              href="https://www.linkedin.com/in/nithinrajk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Nithin
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
