import { memo } from 'react';
import './Template.scss';

const Template = memo(({ children }) => {
	return (
		<div className="Template">
			<div className="title">To-do list</div>
			<div className="content">{children}</div>
		</div>
	)
})

export default Template;
