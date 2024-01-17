import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSection';
import * as React from 'react';

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
