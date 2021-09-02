import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
	render() {
		const {name, children} = this.props;
		return (
			<div>
				안녕하세요, 제 이름은 {name}입니다. <br />
				children 값은 {children}
				입니다.
			</div>
		);
	};
};

MyComponent.defaultProps = {
	name: 'kunlee'
};

MyComponent.propTypes = {
	name: PropTypes.string
};

export default MyComponent;
