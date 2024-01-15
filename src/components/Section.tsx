'use client';

import React, { ReactNode, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useMotionValueEvent, useScroll } from 'framer-motion';

function Section({
  children,
  className,
  theme,
}: {
  children: ReactNode;
  className: string | undefined;
  theme: string;
}) {
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
      className={`flex flex-col bg-white dark:bg-black py-32 min-h-screen ${
        className ? className : ''
      }`}
      ref={container}
    >
      {children}
    </section>
  );
}

export default Section;
