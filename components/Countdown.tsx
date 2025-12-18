import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const Countdown: React.FC = () => {
  const targetDate = new Date('2025-12-20T12:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isExpired: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-party-600 text-white py-2 px-4 text-center font-bold animate-pulse">
        🚀 O ROLÊ JÁ COMEÇOU! CORRE PRA CÁ! 🍻
      </div>
    );
  }

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-3 md:px-6">
      <span className="text-2xl md:text-3xl font-black tabular-nums">{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="w-full bg-white/40 backdrop-blur-md border-b border-party-200 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
        <div className="flex items-center gap-2 text-party-800 font-bold mb-2 md:mb-0">
          <Timer className="w-5 h-5 animate-spin-slow" />
          <span className="text-sm md:text-base whitespace-nowrap">Faltam para o churrasco:</span>
        </div>
        
        <div className="flex items-center divide-x divide-party-300 text-party-900">
          <TimeBlock value={timeLeft.days} label="Dias" />
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <TimeBlock value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;