import React from 'react';

const Game = ({ myImage, comImage, onClick, onClickStop, result, score }) => {
	return (
		<div>
			<div>Computer</div>
			<img src={comImage} alt="img" /><br/>
			<div>You</div>
			<img src={myImage} alt="img" /><br/>
			<button onClick={() => onClick('scissors')}>β</button>
			<button onClick={() => onClick('rock')}>β</button>
			<button onClick={() => onClick('paper')}>π</button>
			<button onClick={() => onClickStop()}>λ©μΆ°!!!</button>
			<div>{result}</div>
			<div>Score : {score}</div>
		</div>
	)
};

export default Game;
