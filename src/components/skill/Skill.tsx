import React from 'react';

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-gray-500 dark:text-white text-4xl md:text-5xl'>
        {icon}
      </span>
      <span className='text-base md:text-lg mt-1 text-black dark:text-white'>
        {name}
      </span>
    </div>
  );
}

export default Skill;
