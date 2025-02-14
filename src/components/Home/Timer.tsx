
// Timer.tsx
import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(27);
  const maxTime = 27; // Total time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : maxTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate progress percentage
  const progress = (timeLeft / maxTime) * 100;

  const timerStyles = {
    background: `conic-gradient(
      #F58634 ${progress}%,
      white ${progress}%
    )`
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-xl mb-4">TIME LEFT</h2>
      <div 
        className="w-24 h-24 rounded-full flex items-center justify-center relative"
        style={timerStyles}
      >
        <div className="absolute inset-1 bg-[#181C20] rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {timeLeft} SEC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;