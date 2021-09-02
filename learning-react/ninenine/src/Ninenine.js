// import React, { Component } from 'react';

// class Ninenine extends Component {
// 	state = {
// 		firstNum: Math.ceil(Math.random()*9),
// 		secNum: Math.ceil(Math.random()*9),
// 		answer: '',
// 		correct: '',
// 	};

// 	input = React.createRef();

// 	onChange = (e) => {
// 		this.setState({answer: e.target.value})
// 	}
// 	onClick = () => {
// 		if (this.state.answer === '')
// 			alert('no 값');
// 		else {
// 			if (parseInt(this.state.answer) === this.state.firstNum * this.state.secNum) {
// 				this.setState({
// 					correct: '정답!',
// 					firstNum: Math.ceil(Math.random()*9),
// 					secNum: Math.ceil(Math.random()*9),
// 					answer: '',
// 				});
// 			}
// 			else {
// 				this.setState({
// 					correct: '땡!',
// 					answer: '',
// 				});
// 			}
// 		}
// 		this.input.current.focus();
// 	}
// 	onNext = () => {
// 		this.setState({
// 			firstNum: Math.ceil(Math.random()*9),
// 			secNum: Math.ceil(Math.random()*9),
// 			answer: '',
// 		});
// 		this.input.current.focus();
// 	}

// 	render() {
// 		const { firstNum, secNum, answer, correct } = this.state;
// 		return (
// 			<div>
// 				<div>{firstNum}Ⅹ{secNum} ?</div>
// 				<input required type="number" value={answer} onChange={this.onChange} ref={this.input}/>
// 				<button onClick={this.onClick}>confirm</button>
// 				<button onClick={this.onNext}>Next</button>
// 				<div>{correct}</div>
// 			</div>
// 		);
// 	};
// }

import React, { useState, useRef, useCallback } from 'react';

const Ninenine = () => {
	const [firstNum, setFirstNum] = useState(Math.ceil(Math.random()*9));
	const [secNum, setSecNum] = useState(Math.ceil(Math.random()*9));
	const [answer, setAnswer] = useState('');
	const [correct, setCorrect] = useState('');
	const inputEl = useRef(null);
	const onClick = useCallback(() => {
		if (answer === '')
			alert('no 값');
		else {
			if (parseInt(answer) === firstNum * secNum) {
				setCorrect('정답!');
				setFirstNum(Math.ceil(Math.random()*9));
				setSecNum(Math.ceil(Math.random()*9));
				setAnswer('');
			}
			else {
				setCorrect('땡!');
				setAnswer('');
			}
		}
		inputEl.current.focus();
	}, [firstNum, secNum, answer]);
	const onNext = useCallback(() => {
		setFirstNum(Math.ceil(Math.random()*9));
		setSecNum(Math.ceil(Math.random()*9));
		setAnswer('');
		inputEl.current.focus();
	}, []);
	const onChange = useCallback(e => {
		setAnswer(e.target.value);
	}, []);

	return (
		<div>
			<div><b>{firstNum}Ⅹ{secNum} ?</b></div>
			<input required type="number" value={answer} onChange={onChange} ref={inputEl}/>
			<button onClick={onClick}>confirm</button>
			<button onClick={onNext}>Next</button>
			<div>{correct}</div>
		</div>
	)
}

export default Ninenine;
