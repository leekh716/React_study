import React, { useCallback, useEffect, useRef, useState } from 'react';

function chooseNum() {
	const array = Array(45).fill(0).map((cur, prev) => prev + 1);
	const chosen = [];
	while (array.length > 45 - 7)
		chosen.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
	const bonus = chosen.splice(6, 1)[0];
	chosen.sort((a, b) => a - b);
	return [...chosen, bonus];
};

const Lotto = () => {
	const [chosen, setChosen] = useState([]);
	const [winNum, setWinNum] = useState([]);
	const [bonus, setBonus] = useState();

	const first = useRef(true);
	const timeout = useRef([]);

	useEffect(() => {
		if (first.current){
		}
		else {
			for (let i = 0; i < 6; i++){
				timeout.current[i] = setTimeout(() => {
					setWinNum((prev) => [...prev, chosen[i]]);
				}, (i + 1) * 500);
			}
			timeout.current[6] = setTimeout(() => {
				setBonus(chosen[6]);
			}, 3500);
			first.current = true;
		}
		return () => {
			timeout.current.forEach((v) => {
				clearTimeout(v);
			});
		};
	}, [chosen]); //chosen이 바뀔때만(버튼 누를때만) 실행됨

	const onClick = useCallback(() => {
		first.current = false;
		setChosen(chooseNum());
		setWinNum([]);
		setBonus();
		timeout.current = [];
	}, [])

	return (
		<div>
			<h3>당첨번호 6개</h3>
			{winNum[0] && <ul>{winNum.map((v) => <li key={v}>{v}</li>)}</ul>}
			<h3>보너스 번호</h3>
			{bonus ? <ul><li>{bonus}</li></ul> : null}
			<button onClick={onClick} >
				{first.current ? 'Start' : 'Start'}
			</button>
		</div>
	)
}

export default Lotto;
