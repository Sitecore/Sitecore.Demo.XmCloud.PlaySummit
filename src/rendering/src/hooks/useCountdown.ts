import { useEffect, useState } from 'react';

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.max(0, Math.floor(countDown / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((countDown % (1000 * 60)) / 1000));

  return [days, hours, minutes, seconds];
};

export { useCountdown };
