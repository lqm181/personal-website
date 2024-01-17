import Section from '@/components/Section';
import Image from 'next/image';
import React from 'react';

function AboutSection() {
  return (
    <Section
      className='bg-gray-100 px-4 lg:px-16 py-16 items-center h-max'
      theme='light'
      data-section
      id='about'
    >
      <div className='flex justify-centers items-center mb-20'>
        {/* <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10  dark:text-white mr-4' /> */}
        <h1 className='text-black dark:text-white font-extrabold text-4xl lg:text-5xl'>
          - About -
        </h1>
        {/* <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10  dark:text-white ml-4' /> */}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        <div className='flex justify-center items-center py-4 lg:py-14'>
          <Image
            height={400}
            width={400}
            alt="Minh Le's Avatar"
            src='/assets/avatar.jpeg'
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='text-2xl lg:text-3xl font-bold w-full text-center'>
            A brief intro, who am I?
          </h1>
          <div className='flex flex-col gap-4 text-base lg:text-xl leading'>
            <p className='leading-relaxed'>
              Hello! I’m Minh Le, a recent Computer Science graduate from Boston
              University.
            </p>
            <p className='leading-relaxed'>
              My academic journey has equipped me with a strong foundation in
              algorithms, data structures, machine learning, system
              architecture, and software design.
            </p>
            <p className='leading-relaxed'>
              Proficient in Python, Java, JavaScript, C, and Go, I have hands-on
              experience across frontend and backend development, including web
              development, databases, operating system design, and software
              testing.
            </p>
            <p className='leading-relaxed'>
              Outside of coding, I find joy in working out, exploring YouTube
              content, and indulging in manga. I also have a passion for cooking
              and enjoy experimenting with new recipes.
            </p>
            <p className='leading-relaxed'>
              Let's connect and explore opportunities together!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
