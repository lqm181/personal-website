import React from 'react';

function ResponsibilitySection() {
  return (
    <div className='text-sm md:text-base'>
      <h1 className='project-section-title mb-4'>My Responsibilities</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='project-section-subtitle mb-2'>
            Front-end Development
          </h2>
          <p>
            I played the pivotal role in designing and developing the front-end
            of RAVIS using Next.js and React.
          </p>
        </div>

        <div>
          <h2 className='project-section-subtitle mb-2'>OAuth with Azure</h2>
          <p>
            I was in charge of setting up the authentication logic like sign
            in/sign up, page protection, etc. for the application using NextAuth
            and Microsoft Azure.
          </p>
        </div>

        <div>
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
