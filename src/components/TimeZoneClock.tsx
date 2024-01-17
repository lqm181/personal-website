'use client';
import React, { useEffect, useState } from 'react';

interface TimeZoneClockProps {
  timeZone: string;
  options?: Intl.DateTimeFormatOptions;
}

function TimeZoneClock({
  timeZone = 'America/New_york',
  options,
}: TimeZoneClockProps) {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const formatOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        ...options,
      };

      const newCurrentTime = new Date().toLocaleString('en-US', formatOptions);
      setCurrentTime(newCurrentTime);
    };

    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, options]);

  return (
    currentTime !== '' && (
      <div>
        <p>{currentTime}</p>
      </div>
    )
  );
}

export default TimeZoneClock;
