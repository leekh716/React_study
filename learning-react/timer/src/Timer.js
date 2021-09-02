import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Timer = (props) => {
  const [timerDay, setTimerDay] = useState('00');
  const [timerHour, setTimerHour] = useState('00');
  const [timerMinute, setTimerMinute] = useState('00');
  const [timerSecond, setTimerSecond] = useState('00');
  const [fin, setFin] = useState();

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

	const {year, month, day, hour, minute, second} = props.location.state.form;

  const startTimer = () => {
		const date = `${month} ${day} ${year} ${hour}:${minute}:${second}`;
    const finalDate = new Date(date).getTime();
    console.log(month);
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const diff = finalDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(diff % (1000 * 60) / 1000);

      if (diff <= 0) {
        clearInterval(interval);
        setFin(true);
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
    }, 1000);
  };
	useEffect(() => {
		startTimer();
		return (() => {
			clearInterval(interval.current)
		});
	});

  return (
    <div className={fin? "finish" : "progress"}>
      <div className="Now">
        <span className="currentText">Current&nbsp;</span>
        <span className="currentText"> </span>
        <span className="currentTime" id="year">{time.year}</span>
        <span className="currentText">.</span>
        <span className="currentTime">{time.month}</span>
        <span className="currentText">.</span>
        <span className="currentTime">{time.day}</span>
        <span className="currentText"> </span>
        <span className="currentTime">{String(time.hour).padStart(2, "0")}</span>
        <span className="currentText">:</span>
        <span className="currentTime">{String(time.minute).padStart(2, "0")}</span>
        <span className="currentText">:</span>
        <span className="currentTime">{String(time.second).padStart(2, "0")}</span>
      </div>
      <div className="setTimediv">
        <span className="setText">Set Time</span>
        <span className="setText"> </span>
        <span className="setTime" id="year">{year}</span>
        <span className="setText">.</span>
        <span className="setTime">{month}</span>
        <span className="setText">.</span>
        <span className="setTime">{day}</span>
        <span className="setText"> </span>
        <span className="setTime">{String(hour).padStart(2, "0")}</span>
        <span className="setText">:</span>
        <span className="setTime">{String(minute).padStart(2, "0")}</span>
        <span className="setText">:</span>
        <span className="setTime">{String(second).padStart(2, "0")}</span>
      </div>
      <div className="timer">
        <div id="timerDay">
          <span className="timerTimeday">{timerDay}</span>
          <span className="timerTextday">Day</span><br/>
        </div>
        <span className="timerTime">{timerHour}</span>
        <span className="timerText">:</span>
        <span className="timerTime">{timerMinute}</span>
        <span className="timerText">:</span>
        <span className="timerTime">{timerSecond}</span>
      </div>
			<Link to="/">Reset</Link>
    </div>
  )
}

export default Timer;
