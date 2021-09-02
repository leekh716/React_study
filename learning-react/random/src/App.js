import React from 'react';
import Random from './Random';
import './App.css';

const App = () =>{

	return (
		<div>
			<h1>오늘의 리뷰 순서!!</h1>
			<div id="random">
				<Random />
			</div>
		</div>
	);
}

export default App;
