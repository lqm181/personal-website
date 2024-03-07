import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ProjectOverlayProps {
  children: React.ReactNode;
  title: string;
  technologies: string[];
  technologyClassname?: HTMLAttributes<HTMLDivElement>['className'];
  has_case_study: boolean;
  case_study_url?: string;
  demo_link?: string;
}

function ProjectOverlay({
  children,
  title,
  technologies,
  technologyClassname,
  has_case_study = false,
  case_study_url,
  demo_link,
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

        <div className='flex mt-8 text-xl font-semibold flex-row justify-between'>
          {/* Only display when the project has a case study */}
          {has_case_study &&
            (case_study_url ? (
              <Link href={case_study_url}>
                <div className='inline-flex items-center justify-center hover:underline'>
                  <h3 className='mr-2 text-black dark:text-white'>
                    Read Case Study
                  </h3>
                  <MdOutlineArrowOutward className='text-black dark:text-white' />
                </div>
              </Link>
            ) : (
              <h3 className='text-black dark:text-white'>
                <u>Case Study: Coming soon.</u>
              </h3>
            ))}

          {/* Demo Link */}
          {demo_link && (
            <div>
              <Link href={demo_link}>
                <div className='inline-flex items-center justify-center'>
                  <h3 className='inline-flex hover:underline mr-2 text-black dark:text-white'>
                    View Demo
                  </h3>
                  <MdOutlineArrowOutward className='text-black dark:text-white' />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectOverlay;
