'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navigationLinks = [
  {
    id: 'projects',
    href: '/#projects',
    title: 'Projects',
  },
  {
    id: 'about',
    href: '/#about',
    title: 'About',
  },
  {
    id: 'contact',
    href: '/#contact',
    title: 'Contact',
  },
];

function TopNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const sections = useRef<NodeListOf<HTMLElement> | null>(null);
  const { theme } = useTheme();

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
      <a href='/' className='order-1'>
        <div className='flex w-max items-center'>
          <Image
            className='pb-2'
            src={`/assets/minh_le_logo_${
              theme === 'dark' ? 'light' : 'dark'
            }.png`}
            alt="Minh Le's logo"
            height={36}
            width={36}
            quality={100}
          />
          <span className='text-black dark:text-white font-bold text-2xl'>
            Minh Le
          </span>
        </div>
      </a>

      <div className='order-2 flex flex-grow justify-end'>
        <a href='#contact' className='order-2 ml-8'>
          <button
            type='button'
            className='text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 md:px-7 py-2 md:py-2.5 me-2 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-500 dark:border-gray-500 dark:text-black'
          >
            Let's Talk
          </button>
        </a>

        <div
          className='order-last md:order-1 flex flex-col md:block'
          onBlur={() => setIsOpen(false)}
        >
          {/* Navigation Links */}
          <NavigationMenu.List
            className={`absolute md:static ${isOpen ? 'flex' : 'hidden md:flex'}
            flex-col md:flex-row flex-1 flex-grow list-none md:items-center bg-slate-50 dark:bg-gray-900 md:bg-white md:dark:bg-black z-10 md:z-auto rounded w-60 md:w-full right-0 md:right-auto py-2 md:py-0 mt-12 md:mt-0 divide-y divide-solid md:divide-none `}
          >
            {navigationLinks.map((link, index) => (
              <NavigationMenu.Item key={index}>
                <NavigationMenu.Link
                  className={`text-black dark:text-white block ${
                    activeSection === link.id
                      ? 'bg-blue-500 text-white md:!text-blue-500 md:underline md:bg-transparent'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:hover:text-blue-500 md:hover:bg-inherit no-underline'
                  } rounded mx-2 px-3 py-3 font-medium leading-none outline-none focus:shadow-[0_0_0_2px] my-1 md:my-0`}
                  href={link.href}
                >
                  {link.title}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          {/* Hamburger Menu Button */}
          {isOpen ? (
            <button
              className='md:hidden inline-flex items-center hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose className='h-8 w-8 text-gray-500 dark:text-gray-200 bg-transparent rounded' />
            </button>
          ) : (
            <button
              className='md:hidden inline-flex items-center hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              onClick={() => setIsOpen(true)}
            >
              <AiOutlineMenu className='h-8 w-8 text-gray-500 dark:text-gray-200 bg-transparent rounded' />
            </button>
          )}
        </div>
      </div>
    </NavigationMenu.Root>
  );
}

export default TopNav;
