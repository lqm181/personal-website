import React, { HTMLProps } from 'react';

interface StandardInputProps extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  label: string;
  inputClassName?: string;
  isError?: boolean;
  className?: string;
}

function StandardInput({
  placeholder,
  label,
  className,
  isError,
  ...props
}: StandardInputProps) {
  const color = isError ? 'red' : 'gray';

  return (
    <div className={`relative ${className}`}>
      <input
        placeholder={placeholder}
        className={`peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-${color}-200 focus:border-${color}-500 focus:outline-0 disabled:border-0 disabled:bg-${color}-50 placeholder:opacity-0 focus:placeholder:opacity-100`}
        {...props}
      />
      <label
        className={`after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-${color}-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-${color}-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-${color}-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-${
          isError ? 'red-500' : 'gray-900'
        } peer-focus:after:scale-x-100 peer-focus:after:border-${
          isError ? 'red-500' : 'gray-900'
        } peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-${color}-500`}
      >
        {label}
      </label>
    </div>
  );
}

export default StandardInput;
