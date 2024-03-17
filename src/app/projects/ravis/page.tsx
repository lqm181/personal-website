import CollaboratorCard from '@/components/CollaboratorCard';
import OverviewCard from '@/components/OverviewCard';
import Section from '@/components/Section';
import GoBeyondSection from '@/sections/ravis/GoBeyondSection';
import ProblemSection from '@/sections/ravis/ProblemSection';
import ResponsibilitySection from '@/sections/ravis/ResponsibilitySection';
import ResultSection from '@/sections/ravis/ResultSection';
import TechnologiesUsed from '@/sections/ravis/TechnologiesUsed';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <Section theme='light' className='pb-8 md:pb-20 !mb-8'>
      <div className='flex w-full justify-center mb-4'>
        <div className='py-8 md:py-12 px-2 md:px-12 drop-shadow-2xl'>
          <Image
            className='rounded-[12px]'
            src='/assets/ravis/home_page.png'
            alt='RAVIS Home Page Image'
            width={776}
            quality={100}
            height={896}
          />
        </div>
      </div>
      <div className='md:px-80 space-y-8 md:space-y-16'>
        {/* Title Section */}
        <div className=''>
          <h1 className='font-semibold text-[#B0B0B0] text-4xl md:text-[40px]'>
            RAVIS.
          </h1>
          <h3 className='font-semibold text-2xl md:text-[32px] leading-7 md:leading-9 mt-2'>
            Adding 80% more features while reducing product complexity by 60%
            with a brand new system.
          </h3>
        </div>

        {/* Project Overview */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 border-y-2 border-y-gray-300 py-2 px-6 md:px-2'>
          <OverviewCard title='TIMELINE'>Jun 23 - Aug 31, 2023</OverviewCard>
          <OverviewCard title='MY ROLE'>Software Developer</OverviewCard>
          <OverviewCard title='TEAM INVOLVED'>
            <div className='space-y-2'>
              <CollaboratorCard
                firstName='Duong (Matthew)'
                lastName='Duong'
                role='Data Scientist'
              />
              <CollaboratorCard
                firstName='Dai Quang'
                lastName='Nguyen'
                role='Data Engineer'
              />
            </div>
          </OverviewCard>
        </div>

        <TechnologiesUsed />

        {/* Project Introduction */}
        <div>
          <h1 className='project-section-title mb-4'>Introduction</h1>
          <p className='text-sm md:text-base'>
            FPT Software is a leading global technology and IT services provider
            headquartered in Vietnam. During my summer internship at FPT
            Software, my team and I was tasked with revamping the e-learning
            recommendation system of our business unit. It is capable of
            suggesting the employees with courses from platforms like Udemy,
            Udacity, and Coursera tailored to their needs and career goals. With
            the new system, our team is set to solve the below problems in just
            2.5 months.
          </p>
        </div>

        {/* Project Problems */}
        <ProblemSection />

        {/* Responsibility */}
        <ResponsibilitySection />

        {/* Results */}
        <ResultSection />

        {/* Going Beyond */}
        <GoBeyondSection />
      </div>
    </Section>
  );
}

export default Page;
