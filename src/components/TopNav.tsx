'use client';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

function TopNav() {
  return (
    <NavigationMenu.Root className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky z-[1] w-screen max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
      <span className='font-bold text-2xl'>minhle</span>

      {/* Navigation Links */}
      <NavigationMenu.List className='flex flex-1 flex-grow center list-none '>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className='block hover:text-blue-700 rounded select-none px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]'
            href='/projects'
          >
            Projects
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className='block hover:text-blue-700 rounded select-none px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px'
            href='/about'
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className='block hover:text-blue-700 rounded select-none px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px'
            href='/contact'
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <button
        type='button'
        className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '
      >
        Let's Talk
      </button>
    </NavigationMenu.Root>
  );
}

export default TopNav;
