import React, { HTMLAttributes, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import {
  BsDatabase,
  BsSearch,
  BsShieldCheck,
  BsWindowSidebar,
} from 'react-icons/bs';

const TitleIcon = ({
  icon,
  containerProps,
}: {
  icon: React.ReactNode;
  containerProps?: string;
}) => {
  return (
    <div
      className={`w-fit h-fit text-3xl md:text-4xl p-3 rounded-xl ${containerProps}`}
    >
      {icon}
    </div>
  );
};

function ResponsibilitySection() {
  const responsibilities = [
    {
      title: 'Front-end Development',
      description:
        'I played the pivotal role in designing and developing the front-end of RAVIS using Next.js and React.',
      icon: <BsWindowSidebar className='stroke-[0.25]' />,
    },
    {
      title: 'OAuth with Azure',
      description:
        'I was in charge of setting up the authentication logic like sign in/sign up, page protection, etc. for the application using NextAuth and Microsoft Azure.',
      icon: <BsShieldCheck className='stroke-[0.25]' />,
    },
    {
      title: 'Search System with Pagination',
      description:
        "I developed the website's search system, enabling users to search courses using keywords and sorting/filtering options. Additionally, I implemented server-side pagination for the search page to optimize bandwidth and enhance system performance.",
      icon: <BsSearch className='stroke-[0.25]' />,
    },
    {
      title: 'Data Access Layer Design',
      description:
        'I designed the data access layer to connect our Flask back-end with Neo4j database. This creates a separation of logic from our API layer which enables reusability, scalability, and great maintainability for the system.',
      icon: <BsDatabase className='stroke-[0.25]' />,
    },
  ];

  return (
    <div className='text-sm md:text-base'>
      <h1 className='project-section-title mb-4'>My Responsibilities</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {responsibilities.map((item, index) => {
          return (
            <div key={index} className='flex md:flex-col'>
              <TitleIcon
                icon={item.icon}
                containerProps='bg-emerald-100 text-emerald-600'
              />
              <div className='ml-4 md:ml-0 md:mt-2'>
                <h2 className='project-section-subtitle mb-1'>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResponsibilitySection;
