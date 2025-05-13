'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { contactData } from '@/lib/data';
import { Phone, MessageCircle, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="rounded-full w-14 h-14 shadow-xl"
            aria-label="Quick contact options"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-56">
          <DropdownMenuItem asChild>
            <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 cursor-pointer">
              <Phone className="h-5 w-5 text-primary" />
              <span>Call Us</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span>Chat on WhatsApp</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
