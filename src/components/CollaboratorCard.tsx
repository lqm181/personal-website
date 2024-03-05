import React from 'react';
import Avatar from './Avatar';

function CollaboratorCard({
  firstName,
  lastName,
  role,
}: {
  firstName: string;
  lastName: string;
  role?: string;
}) {
  return (
    <div className='flex items-center'>
      <Avatar
        style={{ marginRight: '8px' }}
        firstName={firstName}
        lastName={lastName}
        size={40}
      />

      <div className='flex flex-col'>
        <h1 className='text-base'>
          {firstName} {lastName}
        </h1>
        <p className='text-sm text-gray-400'>{role && role}</p>
      </div>
    </div>
  );
}

export default CollaboratorCard;
