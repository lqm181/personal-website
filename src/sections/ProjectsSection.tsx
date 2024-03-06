import ProjectOverlay from '@/components/ProjectOverlay';
import Section from '@/components/Section';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function ProjectsSection() {
  return (
    <Section
      data-section
      className='items-center h-max mt-24 lg:mt-48 bg-white dark:bg-black'
      theme='dark'
      id='projects'
    >
      <div className='flex justify-centers items-center mb-20'>
        <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10 text-black dark:text-white mr-4' />
        <h1 className='text-black dark:text-white font-extrabold text-4xl lg:text-5xl text-center'>
          Recent Projects
        </h1>
        <ComputerDesktopIcon className='h-6 w-6 lg:h-10 lg:w-10 text-black dark:text-white ml-4' />
      </div>

      <div className='flex flex-col w-full py-4 px-2 lg:px-16 mt-4'>
        {/* Ravis */}
        <ProjectOverlay
          has_case_study={true}
          title='Fullstack Software Development'
          technologies={[
            'Web Development',
            'Recommender System',
            'Nextjs',
            'Flask',
            'JavaScript',
            'Neo4j',
            'Python',
            'React',
            'Apache Airflow',
            'Selenium',
            'spaCy',
          ]}
          case_study_url='/projects/ravis'
        >
          <div
            className='flex flex-col w-full h-max min-h-[500px] rounded-3xl shadow-inner items-center py-4'
            style={{ backgroundColor: '#A3A5FF' }}
          >
            <h2 className='text-black dark:text-white font-bold text-3xl lg:text-4xl mb-2'>
              RAVIS
            </h2>
            <h3 className='text-black dark:text-white text-2xl lg:text-3xl font-medium'>
              Enhance your skills with
            </h3>
            <h3 className='text-black dark:text-white text-2xl lg:text-3xl text-center font-medium'>
              personalized learning recommendations.
            </h3>
            <Image
              className='scale-75 lg:scale-75 -mt-2 -mb-12'
              src='/assets/ravis_photo.png'
              width={916}
              height={1500}
              quality={100}
              alt='Ravis Demo Image'
            />
          </div>
        </ProjectOverlay>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-max mt-8'>
          {/* Epik */}
          <ProjectOverlay
            has_case_study={false}
            title='Software Development with Machine Learning'
            technologies={[
              'COSMIC',
              'GPT 4.0',
              'Langchain',
              'Huggingface',
              'Gradio',
              'NLTK',
              'PyTorch',
              'Python',
              'Tensorflow',
              'spaCy',
            ]}
            demo_link='https://huggingface.co/spaces/spark-ds549/Epik'
          >
            <div
              className='grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-inner min-h-[500px]'
              style={{ backgroundColor: '#FF971E' }}
            >
              {/* Epik Title */}
              <div className='flex flex-col flex-1 justify-evenly text-center lg:text-left h-full px-4 py-4 lg:pl-12 lg:py-12'>
                <h2 className='text-black dark:text-white font-bold text-3xl lg:text-4xl mb-12'>
                  EPIK Project
                </h2>
                <h3 className='text-black dark:text-white text-2xl lg:text-3xl font-medium'>
                  Mitigating sexual exploitation with the power of AI.
                </h3>
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
          </ProjectOverlay>

          {/* OS */}
          <ProjectOverlay
            has_case_study={false}
            title='Operating System Development'
            technologies={[
              'OS Dev',
              'SATA',
              'AHCI',
              'C',
              'Assembly x86',
              'Linux',
            ]}
          >
            <div
              className='grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-inner w-full items-stretch h-full min-h-[500px]'
              style={{ backgroundColor: '#BAE6FD' }}
            >
              <div className='flex flex-col flex-1 justify-evenly text-center lg:text-left h-full px-4 py-4 lg:pl-12 lg:py-12'>
                <h2 className='text-black dark:text-white font-bold text-3xl lg:text-4xl mb-12 '>
                  LeRimOS
                </h2>
                <h3 className='text-black dark:text-white text-2xl lg:text-3xl font-medium'>
                  A Unix-like OS supporting SATA filesystem, task scheduling,
                  and multithreading.
                </h3>
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
          </ProjectOverlay>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;
