import CollaboratorCard from '@/components/CollaboratorCard';
import OverviewCard from '@/components/OverviewCard';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className='w-100 pb-20'>
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
      <div className='px-80'>
        {/* Title Section */}
        <div className='mb-16'>
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
      </div>
    </div>
  );
}

export default Page;
