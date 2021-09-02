import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});
	const showDetail = query.detail === 'true';
	return (
		<div>
			<h1>hihiihih</h1>
			<p>proehcthihfiififi</p>
			{showDetail && <p>detail 값을 true 로 설정했구나!</p>}
		</div>
	)
}

export default About;
