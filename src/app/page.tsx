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

      <div>
        <p className='text-sm text-gray-500 dark:text-gray-200 text-center'>
          Copyright @ 2024 Minh Le. All rights reserved.
        </p>
      </div>
    </div>
  );
}
