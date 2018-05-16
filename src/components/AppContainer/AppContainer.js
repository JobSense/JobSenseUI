import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppContainer.css';

class AppContainer extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

AppContainer.propTypes = {
	children: PropTypes.node,
};

export default AppContainer;
