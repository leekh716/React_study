import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const date = new Date();
	const [form, setForm] = useState({
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
	});
	const { year, month, day, hour, minute, second } = form;
	const onChange = e => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value
		};
		setForm(nextForm);
	}
	const onClick = e => {
		const nextForm = {
		...form,
			[e.target.name]: ''
		};
		setForm(nextForm);
	}

	return (
		<div className="home">
			<div className="input">
				<input id="year" onChange={onChange} onClick={onClick} required min="0" name="year" value={year} placeholder="year" autoComplete="off"/>
				<span className="text">.</span>
				<input onChange={onChange} onClick={onClick} required min="0" max="12" name="month" value={month} placeholder="month" autoComplete="off"/>
				<span className="text">.</span>
				<input onChange={onChange} onClick={onClick} required min="0" max="31" name="day" value={day} placeholder="day" autoComplete="off"/>
				<span className="text"> </span>
				<input onChange={onChange} onClick={onClick} required min="0" max="23" name="hour" value={hour} placeholder="hour" autoComplete="off"/>
				<span className="text">:</span>
				<input onChange={onChange} onClick={onClick} required min="0" max="59" name="minute" value={minute} placeholder="minute" autoComplete="off"/>
				<span className="text">:</span>
				<input onChange={onChange} onClick={onClick} required min="0" max="59" name="second" value={second} placeholder="second" autoComplete="off"/>
			</div>
			<Link to={{pathname: "/timer", state: {form}}}>Countdown</Link>
		</div>
	)
}

export default Home;
