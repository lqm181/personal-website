'use client';

import React, { HTMLProps, ReactNode, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface SectionProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
  theme: string;
}

function Section({ children, className, theme, ...props }: SectionProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme === 'dark' ? 'dark' : 'light');
    }
  });
  return (
    <section
      className={`flex flex-col bg-white dark:bg-black mt-8 mb-20 md:mb-60 min-h-svh ${
        className ? className : ''
      }`}
      ref={container}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
