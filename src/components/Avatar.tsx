import Image from 'next/image';
import React from 'react';

function stringToColor(name: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function Avatar({
  src,
  firstName,
  lastName,
  size,
  style,
}: {
  src?: string;
  firstName?: string;
  lastName?: string;
  size: number;
  style?: React.CSSProperties;
}) {
  let name = firstName ? firstName : '';
  name += lastName ? lastName : '';

  const avatarColor = stringToColor(name);
  console.log(avatarColor);
  return (
    <div style={style}>
      {src ? (
        <div className='rounded-full'>
          <Image
            src={src}
            width={size}
            height={size}
            quality={100}
            alt='Avatar'
          />
        </div>
      ) : (
        <div
          style={{
            // backgroundColor: avatarColor,
            height: `${size}px`,
            width: `${size}px`,
          }}
          className={`relative inline-flex items-center justify-center overflow-hidden] rounded-full text-gray-600 bg-gray-100`}
        >
          <span className='font-medium text-sm'>
            {firstName?.charAt(0)} {lastName?.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

export default Avatar;
