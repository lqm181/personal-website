import React from 'react';
import StandardInput from './StandardInput';
import StandardTextArea from './StandardTextArea';

function ContactForm() {
  return (
    <form action='#' className='space-y-4'>
      <div className='flex flex-wrap mb-6'>
        <div
          className='flex gap-2 w-full flex-wrap md:flex-nowrap'
          // className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'
        >
          {/* Name */}
          <StandardInput
            className='h-11 w-full md:w-1/2'
            placeholder='John Doe'
            label='Your Name'
          />

          {/* Email*/}
          <StandardInput
            className='h-11 w-full md:w-1/2 mt-8 md:mt-0'
            placeholder='example@gmail.com'
            label='Your Email'
          />
        </div>

        {/* Message Title*/}
        <StandardInput
          className='h-11 w-full pr-4 mt-8'
          placeholder='Title'
          label='Message Title'
        />

        {/* Message Text Area*/}
        <StandardTextArea
          className='w-full h-full mt-8'
          label='Message'
          rows={8}
        />
      </div>

      <button
        type='submit'
        className='py-3 px-5 text-sm font-medium text-center text-white rounded-3xl bg-black sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-500 dark:text-black'
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
