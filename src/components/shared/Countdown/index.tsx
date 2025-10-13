"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const formatNumber = (num: number) => String(num).padStart(2, "0");

interface CountdownProps {
  targetDate?: string;
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = dayjs(targetDate);

    const timer = setInterval(() => {
      const now = dayjs();
      const duration = target.diff(now);

      if (duration <= 0) {
        clearInterval(timer);
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center gap-x-3  text-center ">
      {isExpired ? (
        <span className="text-xl font-bold text-red-500">EXPIRED!</span>
      ) : (
        <>
          <div className="countdown-box">
            <p>{formatNumber(timeLeft.days)}</p>
          </div>
          :
          <div className="countdown-box">
            <p>{formatNumber(timeLeft.hours)}</p>
          </div>
          :
          <div className="countdown-box">
            <p>{formatNumber(timeLeft.minutes)}</p>
          </div>
          :
          <div className="countdown-box">
            <p>{formatNumber(timeLeft.seconds)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
