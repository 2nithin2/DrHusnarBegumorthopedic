'use client';

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';

// Define the type for the 'as' prop, restricting it to valid HTML tag names
type AsProp = keyof JSX.IntrinsicElements;
// Define a default component type if 'as' is not provided
type DefaultAsComponent = 'section';

// The props for the SectionWrapper component.
// It's generic over AsComponent, which defaults to 'section'.
interface SectionWrapperProps<TAsComponent extends AsProp = DefaultAsComponent>
  // It includes all MotionProps.
  extends MotionProps,
    // It also includes HTMLAttributes specific to the AsComponent element type.
    // We Omit 'onAnimationStart' from HTMLAttributes to prevent conflict with MotionProps' version.
    Omit<HTMLAttributes<HTMLElementTagNameMap[TAsComponent]>, 'onAnimationStart'> {
  children: React.ReactNode;
  className?: string;
  as?: TAsComponent;
}

export function SectionWrapper<TAsComponent extends AsProp = DefaultAsComponent>({
  children,
  className,
  as,
  initial = { opacity: 0, y: 50, scale: 0.95 },
  whileInView = { opacity: 1, y: 0, scale: 1 },
  viewport = { once: false, amount: 0.2 },
  transition = { duration: 0.4, ease: 'easeOut' },
  ...props // Collects remaining MotionProps and Omitted HTMLAttributes
}: SectionWrapperProps<TAsComponent>) {
  // Determine the component to render: use the 'as' prop or default to 'section'.
  const ComponentToRender = as || ('section' as TAsComponent);
  // Create the motion-enhanced version of the component.
  const MotionComponent = motion[ComponentToRender];

  return (
    <MotionComponent
      className={cn('w-full py-12 md:py-16 lg:py-20', className)}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props} // Spread the collected props
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </MotionComponent>
  );
}
