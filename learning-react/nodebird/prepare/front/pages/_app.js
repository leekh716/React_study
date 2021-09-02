import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Nodebird = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>NodeBird</title>
			</Head>
			<Component />
		</>
	)
};

Nodebird.propTypes = {
	Component: PropTypes.elementType.isRequired,
}

export default Nodebird;
