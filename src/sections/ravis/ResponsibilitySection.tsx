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
      className={`inline-flex text-2xl md:text-4xl p-3 rounded-xl ${containerProps}`}
    >
      {icon}
    </div>
  );
};

function ResponsibilitySection() {
  return (
    <div className='text-sm md:text-base'>
      <h1 className='project-section-title mb-4'>My Responsibilities</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <TitleIcon
            icon={<BsWindowSidebar className='stroke-[0.25]' />}
            containerProps='bg-emerald-100 text-emerald-600 mb-1'
          />
          <h2 className='project-section-subtitle mb-2'>
            Front-end Development
          </h2>
          <p>
            I played the pivotal role in designing and developing the front-end
            of RAVIS using Next.js and React.
          </p>
        </div>

        <div>
          <TitleIcon
            icon={<BsShieldCheck className='stroke-[0.25]' />}
            containerProps='bg-emerald-100 text-emerald-600 mb-1'
          />

          <h2 className='project-section-subtitle mb-2'>OAuth with Azure</h2>
          <p>
            I was in charge of setting up the authentication logic like sign
            in/sign up, page protection, etc. for the application using NextAuth
            and Microsoft Azure.
          </p>
        </div>

        <div>
          <TitleIcon
            icon={<BsSearch className='stroke-[0.25]' />}
            containerProps='bg-emerald-100 text-emerald-600 mb-1'
          />
          <h2 className='project-section-subtitle mb-2'>
            Search System with Pagination
          </h2>
          <p>
            I developed the website's search system, enabling users to search
            courses using keywords and sorting/filtering options. Additionally,
            I implemented server-side pagination for the search page to optimize
            bandwidth and enhance system performance.
          </p>
        </div>

        <div>
          <TitleIcon
            icon={<BsDatabase className='stroke-[0.25]' />}
            containerProps='bg-emerald-100 text-emerald-600 mb-1'
          />
          <h2 className='project-section-subtitle mb-2'>
            Data Access Layer Design
          </h2>
          <p>
            I designed the data access layer to connect our Flask back-end with
            Neo4j database. This creates a separation of logic from our API
            layer which enables reusability, scalability, and great
            maintainability for the system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsibilitySection;
