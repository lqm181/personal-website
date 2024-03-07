'use client';
import React, { useRef } from 'react';
import StandardInput from './StandardInput';
import StandardTextArea from './StandardTextArea';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { contactFormSchema } from '../schemas/ContactFormSchema';
import { toast } from 'react-toastify';

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (values: any, actions: any) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    actions.resetForm();

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );

        toast.success('Thank you! Your message has been sent.');
        formRef.current?.reset();
      } catch (error: any) {
        toast.error('Failed to sent message.');
        console.error(error);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        user_name: '',
        user_email: '',
        message_title: '',
        message: '',
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, actions) => {
        handleFormSubmit(values, actions);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
      }) => {
        return (
          <form
            ref={formRef}
            action='#'
            className='space-y-4'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-wrap mb-6'>
              <div className='flex gap-2 w-full flex-wrap md:flex-nowrap'>
                {/* Name */}
                <div className='w-full'>
                  <StandardInput
                    className='h-11 w-full'
                    placeholder='John Doe'
                    label='Your Name'
                    name='user_name'
                    value={values.user_name}
                    onChange={handleChange}
                    isError={
                      errors.user_name && touched.user_name ? true : false
                    }
                  />
                  {errors.user_name && touched.user_name && (
                    <p className='text-red-500 text-[11px]'>
                      {errors.user_name}
                    </p>
                  )}
                </div>

                {/* Email*/}
                <div className='w-full'>
                  <StandardInput
                    className='h-11 w-full mt-8 md:mt-0'
                    placeholder='example@gmail.com'
                    label='Your Email'
                    name='user_email'
                    value={values.user_email}
                    isError={
                      errors.user_email && touched.user_email ? true : false
                    }
                    onChange={handleChange}
                    type='email'
                  />
                  {errors.user_email && touched.user_email && (
                    <p className='text-red-500 text-[11px]'>
                      {errors.user_email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Title*/}
              <div className='w-full'>
                <StandardInput
                  className='h-11 w-full pr-4 mt-8'
                  placeholder='Title'
                  label='Message Title'
                  name='message_title'
                  value={values.message_title}
                  onChange={handleChange}
                  isError={
                    errors.message_title && touched.message_title ? true : false
                  }
                />
                {errors.message_title && touched.message_title && (
                  <p className='text-red-500 text-[11px]'>
                    {errors.message_title}
                  </p>
                )}
              </div>

              {/* Message Text Area*/}
              <div className='w-full'>
                <StandardTextArea
                  className='w-full h-full mt-8'
                  label='Message'
                  rows={8}
                  isError={errors.message && touched.message ? true : false}
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && touched.message && (
                  <p className='text-red-500 text-[11px]'>{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center text-white rounded-3xl bg-black sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-500 dark:text-black disabled:opacity-35'
              disabled={isSubmitting}
            >
              Send message
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
