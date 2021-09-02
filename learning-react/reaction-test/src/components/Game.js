import React from 'react';

const Game = ({ myImage, comImage, onClick, onClickStop, result, score }) => {
	return (
		<div>
			<div>Computer</div>
			<img src={comImage} alt="img" /><br/>
			<div>You</div>
			<img src={myImage} alt="img" /><br/>
			<button onClick={() => onClick('scissors')}>✌</button>
			<button onClick={() => onClick('rock')}>✊</button>
			<button onClick={() => onClick('paper')}>🖐</button>
			<button onClick={() => onClickStop()}>멈춰!!!</button>
			<div>{result}</div>
			<div>Score : {score}</div>
		</div>
	)
};

export default Game;
