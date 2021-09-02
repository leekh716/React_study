import React from 'react';
import styled, { css } from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const Box = styled.div`
	/* props 로 넣어준 값을 직접 전달해 줄 수 있습니다. */
	background: ${props => props.color || 'blue'};
	padding: 1rem;
	display: flex;
	width: 1024px;
	margin: 0 auto;
	@media (max-width: 1024px){
		width: 768px;
	}
	@media (max-width: 768px){
		width: 100%;
	}
`;

const Button = styled.button`
	background: white;
	color: black;
	border-radius: 4px;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: 1rem;
	font-weight: 600;

	/* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
	&:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	/* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해준다. */
	${props =>
		props.inverted &&
		css`
			background: none;
			border: 2px solid white;
			color: white;
			&:hover {
				background: white;
				color: black;
			}
		`
	};
	& + button {
		margin-left: 1rem;
	}
`;

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

const StyledComponent = () => {
	// const classes = useStyles();
	return (
		<Box color="black">
			<Button>안녕하세요</Button>
			<Button inverted={true}>테두리만</Button>
			{/* <Button className={classes.root}>hhh</Button> */}
		</Box>
	)
};

export default StyledComponent;
