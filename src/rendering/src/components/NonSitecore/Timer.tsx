import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

const DateTimeDisplay = ({ value, type }: { value: number; type: string }) => {
  return (
    <div className="timer-block">
      <p className="timer-block-value">{value < 10 ? `0${value}` : value}</p>
      <p className="timer-block-type">{type}</p>
    </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="timer-counter">
      <DateTimeDisplay value={days} type={'Days'} />
      <p className="timer-separator">:</p>
      <DateTimeDisplay value={hours} type={'Hours'} />
      <p className="timer-separator">:</p>
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <p className="timer-separator">:</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

const Timer = ({ targetDate }: { targetDate: string }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="timer">
      <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default Timer;
