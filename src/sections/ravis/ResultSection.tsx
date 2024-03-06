import Image from 'next/image';
import React from 'react';

const results = [
  {
    src: '/assets/ravis/recommendation_page.png',
    subtitle:
      'Carousels are replaced with pagination for enhanced user browsing experience.',
    alt: 'Recommendation page image',
  },
  {
    src: '/assets/ravis/course_page.png',
    subtitle:
      'Graph and visualizations are added to facilitate user’s studying.',
    alt: 'Learning progress with charts image',
  },
  {
    src: '/assets/ravis/search_page.png',
    subtitle:
      'A functional search system with sort and filter using Neo4j’s full-text indexing and Apache Lucene',
    alt: 'Search page image',
  },
  {
    src: '/assets/ravis/profile_page.png',
    subtitle:
      'A dedicating user page for skill management and uploading resume/cv.',
    alt: 'Profile page for managing skills and uploading resume image',
  },
];

function ResultSection() {
  return (
    <div>
      <h1 className='project-section-title mb-8'>Results</h1>

      <div className='flex flex-col space-y-12'>
        {results.map((result, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center'
          >
            <Image
              src={result.src}
              alt={result.alt}
              height={940}
              width={1920}
              quality={100}
              className='rounded-xl border-8 border-black shadow-2xl'
            />

            <p className='mt-3'>{result.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultSection;
