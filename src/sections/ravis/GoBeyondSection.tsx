import Image from 'next/image';
import React from 'react';

const results = [
  {
    src: '/assets/ravis/dashboard_page.png',
    subtitle: 'An admin page with dashboard for managing users and courses.',
    alt: 'Admin dashboard page image',
  },
  {
    src: '/assets/ravis/chatbot_page.png',
    subtitle:
      "A generative AI chatbot for quick and interactive recommendations using LangChain and OpenAI's API.",
    alt: 'Integration with AI chatbot image',
  },
];

function GoBeyondSection() {
  return (
    <div className='text-sm md:text-base'>
      <h1 className='project-section-title mb-4'>Going Beyond</h1>
      <p className='mb-8'>
        Having pride and enthusiasm for what we did, our team commit to go
        beyond what was required and exceed the expectation of our managers and
        supervisor. Here are the special features that we added to the system.
      </p>

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

            <p className='mt-3 text-center'>{result.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoBeyondSection;
