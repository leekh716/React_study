import { memo } from 'react';
import './Template.scss';

const Template = memo(({ children }) => {
	return (
		<div className="Template">
			<div className="title"><h2>게시판입니다아아ㅏ아</h2></div>
			<div className="contents">{children}</div>
		</div>
	)
})

export default Template;
