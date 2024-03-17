import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SkillProps {
  icon: React.ReactNode;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  iconProps?: HTMLAttributes<HTMLSpanElement>;
}

function Skill({ icon, name, size = 'lg', iconProps = {} }: SkillProps) {
  const { className: iconClassName, ...otherIconProps } = iconProps;

  const iconClasses = twMerge(
    'text-gray-500 dark:text-white',
    size === 'sm' && 'text-2xl md:text-xl',
    size === 'md' && 'text-3xl md:text-4xl',
    size === 'lg' && 'text-4xl md:text-5xl',
    iconClassName
  );

  const skillNameClasses = twMerge(
    'mt-1 text-black dark:text-white',
    size === 'sm' && 'text-xs md:text-sm',
    size === 'md' && 'text-sm md:text-base',
    size === 'lg' && 'text-base md:text-lg'
  );

  return (
    <div className='flex flex-col items-center justify-center'>
      <span className={iconClasses} {...otherIconProps}>
        {icon}
      </span>
      <span className={skillNameClasses}>{name}</span>
    </div>
  );
}

export default Skill;
