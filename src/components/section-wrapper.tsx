
'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';

interface SectionWrapperProps extends Omit<HTMLAttributes<HTMLElement>, 'onAnimationStart'>, MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  children,
  className,
  as: Component = 'section',
  initial = { opacity: 0, y: 50, scale: 0.95 },
  whileInView = { opacity: 1, y: 0, scale: 1 },
  viewport = { once: false, amount: 0.2 },
  transition = { duration: 0.5, ease: 'easeOut' },
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
