import React from 'react';

function ProblemSection() {
  return (
    <div>
      <h1 className='project-section-title mb-4'>Problems</h1>
      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='project-section-subtitle mb-2'>
            The old UI design is unwelcoming.
          </h2>
          <p>
            It does not have a consistent design language across components and
            pages, demonstrated by conflicting color usages and themes. The
            excessive use of carousels in the design creates a lot of
            inconvenience for the user when browsing courses.
          </p>
        </div>

        <div>
          <h2 className='project-section-subtitle mb-2'>
            Core features are nonfunctional.
          </h2>
          <p>
            Many core functionalities of the old system are not working such as
            parsing and extracting user data from resumes, searching for courses
            based on keywords, managing user's skills, and most importantly
            recommending courses based on user's skills.
          </p>
        </div>

        <div>
          <h2 className='project-section-subtitle mb-2'>
            The system architecture is unnecessarily complicated.
          </h2>
          <p>
            Even though it has the potential of only 300+ daily users, the old
            system uses expensive and respectively complex solutions like AWS
            EC2, AWS Lambda, and two separate databases (Neo4j and MongoDB) for
            storing user data.
          </p>
        </div>

        <div>
          <h2 className='project-section-subtitle mb-2'>
            Database is inefficiently used.
          </h2>
          <p>
            The old system used Neo4j as the main database but only for storing
            user data. It opts for a neural collaborative-filtering model that
            requires hand-labeling for 3000+ skills. Consequently, it fails to
            leverage the nature of Neo4j being a graph database, which is
            well-known for recommendation system applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProblemSection;
