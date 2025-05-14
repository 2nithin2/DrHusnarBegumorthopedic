'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement>, MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  children,
  className,
  as: Component = 'section',
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: 'easeOut' },
  ...props
}: SectionWrapperProps) {
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={cn('w-full py-12 md:py-16 lg:py-20', className)}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </MotionComponent>
  );
}
