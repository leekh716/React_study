import { memo, useCallback, useState } from "react";
import './Insert.scss';

const Insert = memo(({ onClick }) => {
	const date = new Date();
	const [input, setInput] = useState({
		inputTodo: '',
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: String(date.getHours()).padStart(2, "0"),
    minute: String(date.getMinutes()).padStart(2, "0"),
    second: String(date.getSeconds()).padStart(2, "0"),
	});

	const { inputTodo, year, month, day, hour, minute, second } = input;

	const onChange = useCallback((e) => {
		const nextInput = {
			...input,
			[e.target.name]: e.target.value
		}
		setInput(nextInput);
	}, [input]);

	const onClickButton = useCallback(() => {
		const date = new Date();
		onClick(inputTodo, year, month, day, hour, minute, second);
		setInput({
			inputTodo: '',
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate(),
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
		});
	}, [inputTodo, year, month, day, hour, minute, second, onClick]);

	const onClickInput = e => {
		const nextInput = {
		...input,
			[e.target.name]: ''
		};
		setInput(nextInput);
	}

	return (
		<div className="Insert">
			<input className="todo" name="inputTodo" value={inputTodo} onChange={onChange} placeholder="할 일을 입력하세요." autoComplete="off" />
			<input className="year" name="year" value={year} onChange={onChange} onClick={onClickInput} placeholder="year" autoComplete="off"/>
			<span className="text">.</span>
			<input name="month" value={month} onChange={onChange} onClick={onClickInput} placeholder="month" autoComplete="off"/>
			<span className="text">.</span>
			<input name="day" value={day} onChange={onChange} onClick={onClickInput} placeholder="day" autoComplete="off"/>
			<span className="text">&nbsp;</span>
			<input name="hour" value={hour} onChange={onChange} onClick={onClickInput} placeholder="hour" autoComplete="off"/>
			<span className="text">:</span>
			<input name="minute" value={minute} onChange={onChange} onClick={onClickInput} placeholder="minute" autoComplete="off"/>
			<span className="text">:</span>
			<input name="second" value={second} onChange={onChange} onClick={onClickInput} placeholder="second" autoComplete="off"/>
			<button onClick={onClickButton}>확인</button>
		</div>
	)
})

export default Insert;
