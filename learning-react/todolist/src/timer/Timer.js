import React, { memo, useEffect, useRef, useState } from 'react';
import './Timer.scss';

const Timer = memo((props) => {
  const [timerDay, setTimerDay] = useState('00');
  const [timerHour, setTimerHour] = useState('00');
  const [timerMinute, setTimerMinute] = useState('00');
  const [timerSecond, setTimerSecond] = useState('00');
  const [fin, setFin] = useState(false);

  const realTime = new Date();
  const [time, setTime] = useState({
    year: realTime.getFullYear(),
    month: realTime.getMonth() + 1,
    day: realTime.getDate(),
    hour: String(realTime.getHours()).padStart(2, "0"),
    minute: String(realTime.getMinutes()).padStart(2, "0"),
    second: String(realTime.getSeconds()).padStart(2, "0"),
  })

	const interval = useRef();

	const {year, month, day, hour, minute, second} = props.todoForm;

  const startTimer = () => {
		const date = `${month} ${day} ${year} ${hour}:${minute}:${second}`;
    const finalDate = new Date(date).getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const diff = finalDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(diff % (1000 * 60) / 1000);
      if (fin && diff > 0)
        setFin(false);
      if (diff <= 0 || props.todo.check) {
        clearInterval(interval);
        setFin(true);
        if (props.todo.check)
          setFin(false);
      }
      else {
        setTimerDay(String(days).padStart(2, "0"));
        setTimerHour(String(hours).padStart(2, "0"));
        setTimerMinute(String(minutes).padStart(2, "0"));
        setTimerSecond(String(seconds).padStart(2, "0"));
        const clock = new Date();
        setTime({
          ...time,
          year: clock.getFullYear(),
          month: clock.getMonth() + 1,
          day: clock.getDate(),
          hour: clock.getHours(),
          minute: clock.getMinutes(),
          second: clock.getSeconds(),
        });
      }
    }, 100);
  };
	useEffect(() => {
		startTimer();
		return (() => {
			clearInterval(interval.current)
		});
	});

  return (
    <div className={fin? "finish" : "progress"}>
      <div className="timer">{timerDay} day {timerHour}:{timerMinute}:{timerSecond}</div>
    </div>
  )
})

export default Timer;
