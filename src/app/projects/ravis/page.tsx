import CollaboratorCard from '@/components/CollaboratorCard';
import OverviewCard from '@/components/OverviewCard';
import Section from '@/components/Section';
import GoBeyondSection from '@/sections/ravis/GoBeyondSection';
import ProblemSection from '@/sections/ravis/ProblemSection';
import ResponsibilitySection from '@/sections/ravis/ResponsibilitySection';
import ResultSection from '@/sections/ravis/ResultSection';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <Section theme='light'>
      <div className='pb-20'>
        <div className='flex w-full justify-center mb-4'>
          <div className='py-12 px-12 drop-shadow-2xl'>
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
        <div className='px-80 space-y-16'>
          {/* Title Section */}
          <div className=''>
            <h1 className='font-semibold text-[#B0B0B0] text-[40px]'>RAVIS.</h1>
            <h3 className='font-semibold text-[32px] leading-9 mt-2'>
              Adding 80% more features while reducing product complexity by 60%
              with a brand new system.
            </h3>
          </div>

          {/* Project Overview */}
          <div className='grid grid-cols-3 gap-2 border-y-2 border-y-gray-300 py-2 px-2'>
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

          {/* Project Introduction */}
          <div>
            <h1 className='project-section-title mb-4'>Introduction</h1>
            <p className='text-base'>
              FPT Software is a leading global technology and IT services
              provider headquartered in Vietnam. During my summer internship at
              FPT Software, my team and I was tasked with revamping the
              e-learning recommendation system of our business unit. It is
              capable of suggesting the employees with courses from platforms
              like Udemy, Udacity, and Coursera tailored their needs and career
              goals. With the new system, our team is set to solve the below
              problems in just 2.5 months.
            </p>
          </div>

          {/* Project Problems */}
          <ProblemSection />

          {/* Results */}
          <ResultSection />

          {/* Responsibility */}
          <ResponsibilitySection />

          {/* Going Beyond */}
          <GoBeyondSection />
        </div>
      </div>
    </Section>
  );
}

export default Page;
