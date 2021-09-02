import React from 'react';

const Template = ({ children }) => {
	return (
		<div>
			<h1>가위바위보를 이겨라!</h1>
			<div>{ children }</div>
		</div>
	)
}

export default Template;
