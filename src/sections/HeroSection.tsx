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

          <div className='flex justify-evenly w-full'>
            <a href='#contact'>
              <button
                type='button'
                className='text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-32'
              >
                Contact Me
              </button>
            </a>
            <a href='#projects'>
              <button
                type='button'
                className='py-2.5 px-5 text-sm font-medium text-blue-800 focus:outline-none bg-white rounded-full border border-blue-500 hover:bg-gray-100 hover:boder-blue-700 focus:ring-4 focus:ring-blue-300 focus:z-10 dark:bg-black dark:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 min-w-32'
              >
                Projects
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
