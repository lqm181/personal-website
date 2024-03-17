import React from 'react';

function SkillContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col py-8 justify-center items-center w-full shadow-lg rounded-lg backdrop-blur-xl bg-zinc-100/40 h-fit'>
      <h1 className='font-semibold text-2xl md:text-3xl text-black dark:text-white'>
        {title}
      </h1>

      <div className='flex flex-wrap mt-8 items-center gap-x-10 gap-y-10 px-6 justify-center'>
        {children}
      </div>
    </div>
  );
}

export default SkillContainer;
