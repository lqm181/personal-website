import React from 'react';

function OverviewCard({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className='flex flex-col'>
      <div className='font-semibold text-sm md:text-base text-[#B0B0B0] mb-1'>
        {title}
      </div>
      <div className='text-sm md:text-base'>{children}</div>
    </div>
  );
}

export default OverviewCard;
