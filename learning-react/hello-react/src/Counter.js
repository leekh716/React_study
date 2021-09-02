import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 0
	};
	render() {
		const {number} = this.state; //state를 조회할 때는 this로 조회
		return (
			<div>
				<h1>{number}</h1>
				<button
					onClick={() => {
						this.setState(prevState => ({
							number: prevState.number + 1
						}));
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
