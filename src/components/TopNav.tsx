'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function TopNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sections = useRef<NodeListOf<HTMLElement> | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 64; // Add padding for nav bar

    let newActiveSection: string | null = null;

    sections.current &&
      sections.current.forEach((section) => {
        const sectionOffsetTop = section?.offsetTop;

        const sectionHeight = section?.offsetHeight;

        if (
          scrollPosition >= sectionOffsetTop &&
          scrollPosition < sectionOffsetTop + sectionHeight
        ) {
          newActiveSection = section.id;
        }

        setActiveSection(newActiveSection);
      });
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavigationMenu.Root className='bg-white border-gray-200 dark:bg-black dark:border-gray-700 fixed top-0 z-[1] w-screen max-w-full flex flex-wrap items-center justify-between mx-auto px-8 py-2 backdrop-blur-lg'>
      <span className='font-bold text-2xl'>Minh Le</span>

      {/* Navigation Links */}
      <NavigationMenu.List className='flex flex-1 flex-grow center list-none '>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={`block ${
              activeSection === 'projects'
                ? 'text-blue-500 underline'
                : ' hover:text-blue-500 no-underline'
            } rounded px-3 py-2 font-medium leading-none outline-none focus:shadow-[0_0_0_2px]`}
            href='#projects'
          >
            Projects
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={`block ${
              activeSection === 'about'
                ? 'text-blue-500 underline'
                : ' hover:text-blue-500 no-underline'
            } rounded px-3 py-2 font-medium leading-none outline-none focus:shadow-[0_0_0_2px]`}
            href='#about'
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={`block ${
              activeSection === 'contact'
                ? 'text-blue-500 underline'
                : ' hover:text-blue-500 no-underline'
            } rounded px-3 py-2 font-medium leading-none outline-none focus:shadow-[0_0_0_2px]`}
            href='#contact'
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <button
        type='button'
        className='text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-500 dark:border-gray-500 dark:text-black'
      >
        Let's Talk
      </button>
    </NavigationMenu.Root>
  );
}

export default TopNav;
