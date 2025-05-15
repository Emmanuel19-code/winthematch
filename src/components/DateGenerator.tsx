"use client";
import { CalendarDays, Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DateGenerator = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).toUpperCase(); // e.g., 15 MAY 2025

      const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      }); 

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-teal-600 px-4 py-2 flex flex-row items-center space-x-2 text-white text-sm font-medium">
  <div className="flex items-center space-x-2">
    <CalendarDays size={18} />
    <span>{date}</span>
  </div>

  {/* Pipe Separator */}
  <span className="text-white">|</span>

  <div className="flex items-center space-x-2">
    <Clock size={18} />
    <span>{time}</span>
  </div>
</div>

  )
}

export default DateGenerator
