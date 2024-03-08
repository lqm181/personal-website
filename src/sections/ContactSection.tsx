import Section from '@/components/Section';
import {
  CalendarIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import TimeZoneClock from '@/components/TimeZoneClock';
import ContactForm from '@/components/ContactForm';

const currentLocation = {
  address: 'Boston, MA, United States',
  timzeZone: 'America/New_York',
};

function ContactSection() {
  return (
    <Section
      className='px-4 lg:px-16 py-4 lg:py-16 items-center h-max !mb-8'
      data-section
      id='contact'
      theme='light'
    >
      <div className='flex justify-centers items-center mb-20'>
        <EnvelopeIcon className='h-6 w-6 lg:h-10 lg:w-10 text-black dark:text-white mr-4' />
        <h1 className='text-black dark:text-white font-extrabold text-4xl lg:text-5xl'>
          Contact Me
        </h1>
        <EnvelopeIcon className='h-6 w-6 lg:h-10 lg:w-10 text-black dark:text-white ml-4' />
      </div>

      {/* Contact Form */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 w-full'>
        <div className='col-span-2 w-full'>
          <h1 className='text-black dark:text-white text-3xl lg:text-4xl font-bold mb-4'>
            Let's work together.
          </h1>
          <h3 className='text-base font-light lg:text-lg text-gray-500 dark:text-gray-200 lg:pr-32 mb-12'>
            I am opened to connect and deliver impactful contributions to your
            projects, whether you represent an established company or a dynamic
            startup.
          </h3>

          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className='grid grid-cols-subgrid col-span-2 lg:col-span-1 w-full'>
          <div className='flex flex-row flex-wrap col-span-full gap-12'>
            {/* Contact Details */}
            <div className='flex flex-col min-w-60 w-max gap-4 mb-4'>
              <h1 className='font-semibold text-lg'>Contact Details</h1>
              {/* Email */}
              <span className='flex items-center gap-2'>
                <EnvelopeIcon className='h-4 w-4' />
                <p>
                  <a
                    href='mailto:minh.le.careers@gmail.com'
                    className='no-underline'
                  >
                    minh.le.careers@gmail.com
                  </a>
                </p>
              </span>

              {/* Phone */}
              <span className='flex items-center gap-2'>
                <DevicePhoneMobileIcon className='h-4 w-4' />
                <p>
                  <a href='tel:+16178740958' className='no-underline'>
                    +1 617-874-0958
                  </a>
                </p>
              </span>
            </div>

            {/* My Digital Spaces */}
            <div className='flex flex-col min-w-60 w-max gap-4 mb-4'>
              <h1 className='font-semibold text-lg'>My Digital Spaces</h1>
              {/* Github */}
              <span className='flex items-center gap-2'>
                <AiOutlineGithub className='h-4 w-4' />
                <p>
                  <a
                    href='https://github.com/lqm181'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='no-underline'
                  >
                    GitHub
                  </a>
                </p>
              </span>

              {/* Linkedins */}
              <span className='flex items-center gap-2'>
                <AiFillLinkedin className='h-4 w-4' />
                <p>
                  <a
                    href='https://www.linkedin.com/in/minhle181/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='no-underline'
                  >
                    LinkedIn
                  </a>
                </p>
              </span>
            </div>

            {/* Location */}
            <div className='flex flex-col min-w-60 w-max  gap-4 mb-4'>
              <h1 className='font-semibold text-lg'>Time Zone</h1>
              {/* Address */}
              {/* <span className='flex items-center gap-2'>
                <MapPinIcon className='h-4 w-4' />
                <p>{currentLocation.address} (willing to relocate)</p>
              </span> */}

              {/* Location Time */}
              <span className='flex items-center gap-2'>
                <CalendarIcon className='h-4 w-4' />
                <TimeZoneClock timeZone={currentLocation.timzeZone} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
