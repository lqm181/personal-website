import React from 'react';
import { ArrowLongDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Section from '@/components/Section';

function HeroSection() {
  return (
    <Section className='h-screen' theme='light'>
      <div className='grid grid-cols-1  lg:grid-cols-2 gap-4 h-full px-8 lg:px-20 pt-24'>
        {/* Left Section */}
        <div className='flex h-full flex-col justify-center'>
          <div className='flex mb-4 lg:mb-8'>
            {/* Globe icon */}
            <GlobeAltIcon className='h-6 w-6 text-green-400 dark:text-green-400' />

            <p className='font-semibold text-black dark:text-white text-xl ml-2'>
              Status: Open to Work
            </p>
          </div>
          <h1 className='text-black dark:text-white text-5xl lg:text-8xl font-extrabold leading-2 tracking-tight mb-4'>
            Xin chào {'👋'}
          </h1>
          <h1 className='text-5xl lg:text-8xl font-extrabold leading-2 tracking-tight text-black dark:text-white'>
            I'm Minh.
          </h1>
        </div>

        {/* Right Section */}
        <div className='flex flex-col justify-center items-center lg:pl-16 mt-4 lg:mt-0'>
          <p className='text-black dark:text-white text-2xl lg:text-4xl mb-12 lg:mb-20'>
            I'm a curiosity-driven software developer with a passion for
            expanding my tech knowledge and developing high-quality software.
          </p>

          <div className='flex justify-around w-full'>
            <a href='#contact'>
              <button
                type='button'
                className='text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg md:text-lg px-8 py-4 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-100 w-32 md:w-60'
              >
                Contact Me
              </button>
            </a>
            <a href='#projects'>
              <button
                type='button'
                className='py-4 px-8 md:text-lg font-medium text-black focus:outline-none bg-white rounded-lg border border-black hover:bg-gray-100 hover:border-gray-700 focus:ring-4 focus:ring-gray-300 focus:z-10 dark:bg-black dark:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 w-32 md:w-60'
              >
                View Projects
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className='flex w-full items-end min-h-28 mt-4'
        style={{ writingMode: 'vertical-lr' }}
      >
        <p className='mb-1 text-black dark:text-white'>scroll</p>
        <div className='flex h-6 overflow-hidden w-6 relative'>
          <ArrowLongDownIcon className='absolute h-6 w-6 text-gray-900 dark:text-white animate-fade-tb -top-full' />
          <ArrowLongDownIcon className='absolute h-6 w-6 text-gray-900 dark:text-white animate-fade-tb' />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
