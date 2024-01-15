import Section from '@/components/Section';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function ProjectsSection() {
  return (
    <Section
      className='items-center h-max mt-24 lg:mt-48'
      theme='dark'
      id='projects'
    >
      <div className='flex justify-centers items-center mb-20'>
        <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10  dark:text-white mr-4' />
        <h1 className='dark:text-white font-extrabold text-3xl lg:text-5xl'>
          Recent Projects
        </h1>
        <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10  dark:text-white ml-4' />
      </div>

      <div className='flex flex-col w-full py-4 px-2 lg:px-16 mt-4'>
        {/* Ravis */}
        <div
          className='flex flex-col w-full h-max min-h-[500px] rounded-3xl shadow-inner items-center py-4'
          style={{ backgroundColor: '#A3A5FF' }}
        >
          <h2 className='dark:text-white font-bold text-3xl lg:text-4xl mb-2'>
            RAVIS
          </h2>
          <h3 className='text-2xl lg:text-3xl font-medium'>
            Enhance your skills with
          </h3>
          <h3 className='text-2xl lg:text-3xl text-center font-medium'>
            personalized learning recommendations.
          </h3>

          {/* Ravis Technology */}
          <div className='flex container justify-center mt-6 flex-wrap'>
            <div className='chip'>Apache Airflow</div>
            <div className='chip'>Flask</div>
            <div className='chip'>JavaScript</div>
            <div className='chip'>Neo4j</div>
            <div className='chip'>Python</div>
            <div className='chip'>React</div>
            <div className='chip'>Selenium</div>
            <div className='chip'>spaCy</div>
          </div>
          <Image
            className='scale-75 lg:scale-75 -mt-2 -mb-12'
            src='/assets/ravis_photo.png'
            width={916}
            height={1500}
            quality={100}
            alt='Ravis Demo Image'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-max mt-8'>
          {/* Epik */}
          <div
            className='grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-inner'
            style={{ backgroundColor: '#FF971E' }}
          >
            {/* Epik Title */}
            <div className='flex flex-col flex-1 justify-center text-center lg:text-left h-full px-4 py-4 lg:pl-12 lg:py-12'>
              <h2 className='dark:text-white font-bold text-3xl lg:text-4xl mb-12'>
                EPIK Project
              </h2>
              <h3 className='text-2xl lg:text-3xl font-medium'>
                Mitigating sexual exploitation with the power of AI.
              </h3>

              {/* Epik Technology */}
              <div className='flex container justify-center mt-12 flex-wrap'>
                <div className='chip'>Huggingface</div>
                <div className='chip'>Gradio</div>
                <div className='chip'>NLTK</div>
                <div className='chip'>PyTorch</div>
                <div className='chip'>Python</div>
                <div className='chip'>Tensorflow</div>
                <div className='chip'>spaCy</div>
              </div>
            </div>

            {/* Epik Image */}
            <div className='flex-1 h-full min-h-72 rounded-br-3xl lg:rounded-e-3xl overflow-hidden relative'>
              <Image
                className='lg:scale-125 absolute left-1/3 lg:-rotate-12'
                src='/assets/epik_photo.png'
                width={828}
                height={1149}
                quality={100}
                alt='Ravis Demo Image'
              />
            </div>
          </div>

          {/* OS */}
          <div
            className='grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-inner w-full items-stretch h-full'
            style={{ backgroundColor: '#BAE6FD' }}
          >
            <div className='flex flex-col flex-1 justfiy-center text-center lg:text-left h-full px-4 py-4 lg:pl-12 lg:py-12'>
              <h2 className='dark:text-white font-bold text-3xl lg:text-4xl mb-12'>
                LeRimOS
              </h2>
              <h3 className='text-2xl lg:text-3xl font-medium'>
                A Unix-like OS supporting SATA filesystem, task scheduling, and
                multithreading.
              </h3>

              {/* OS Technology */}
              <div className='flex container justify-center mt-12 flex-wrap'>
                <div className='chip'>C</div>
                <div className='chip'>Assembly x86</div>
                <div className='chip'>Linux</div>
              </div>
            </div>
            <div className='flex-1 h-full rounded-br-3xl min-h-72 overflow-hidden relative'>
              <Image
                className='lg:scale-125 absolute left-1/4  lg:translate-y-1/2'
                src='/assets/os_photo.png'
                width={828}
                height={1149}
                quality={100}
                alt='Ravis Demo Image'
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;
