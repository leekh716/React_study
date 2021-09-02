import React, { useState } from 'react';

const Counter = () => {
	const [num, setNum] = useState(0);
	const onClickAdd = () => setNum(num + 1);
	const onClickMinus = () => setNum(num - 1);
	const onClickReset = () => setNum(0);

	return (
		<div>
			<p>Value : <span id="num">{num}</span></p>
			<button className="btn" onClick={onClickMinus}>➖</button>
			<button className="reset" onClick={onClickReset}>🔄Reset!</button>
			<button className="btn" onClick={onClickAdd}>➕</button>
		</div>
	);
}

export default Counter;
