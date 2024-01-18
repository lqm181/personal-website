import React, { HTMLAttributes } from 'react';

interface ProjectOverlayProps {
  children: React.ReactNode;
  title: string;
  technologies: string[];
  technologyClassname?: HTMLAttributes<HTMLDivElement>['className'];
}

function ProjectOverlay({
  children,
  title,
  technologies,
  technologyClassname,
}: ProjectOverlayProps) {
  return (
    <div className='group relative overflow-hidden container rounded-3xl text-black dark:text-white'>
      <div className='container group-hover:opacity-50'>{children}</div>
      <div className='flex flex-col absolute h-full w-full bg-white/85 dark:bg-black/75 -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 justify-end p-8 lg:p-12 transition-all duration-500'>
        <h1 className='text-4xl font-bold text-black dark:text-white'>
          {title}
        </h1>
        <div
          className={`flex flex-container flex-wrap ${technologyClassname} mt-6`}
        >
          {technologies.map((tech, index) => (
            <div className='chip text-black dark:text-white' key={index}>
              {tech}
            </div>
          ))}
        </div>

        <h3 className='mt-8 text-xl font-semibold text-black dark:text-white'>
          <u>Case Study: Coming soon.</u>
        </h3>
      </div>
    </div>
  );
}

export default ProjectOverlay;
