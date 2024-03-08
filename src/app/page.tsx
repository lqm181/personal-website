import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillSection from '@/sections/SkillSection';
import * as React from 'react';

export default function Home() {
  return (
    <div className='mb-4'>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
