import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Dr. Begum's Care Hub",
  description: 'Comprehensive physiotherapy and wellness services by Dr. Husnara Begum.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased', // Removed bg-background
          openSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
