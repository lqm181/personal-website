import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ProjectOverlayProps {
  children: React.ReactNode;
  title: string;
  technologies: string[];
  technologyClassname?: HTMLAttributes<HTMLDivElement>['className'];
  case_study_url?: string;
}

function ProjectOverlay({
  children,
  title,
  technologies,
  technologyClassname,
  case_study_url,
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

        {case_study_url ? (
          <Link href={case_study_url}>
            <div className='mt-8 inline-flex text-xl items-center justify-center hover:underline'>
              <h3 className='mr-2 font-semibold text-black dark:text-white'>
                View Case Study
              </h3>
              <MdOutlineArrowOutward />
            </div>
          </Link>
        ) : (
          <h3 className='mt-8 text-xl font-semibold text-black dark:text-white'>
            <u>Case Study: Coming soon.</u>
          </h3>
        )}
      </div>
    </div>
  );
}

export default ProjectOverlay;
