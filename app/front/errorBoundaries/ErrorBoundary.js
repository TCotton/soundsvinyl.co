import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
	constructor ( props ) {
		super( props );
		this.state = { error: null, errorInfo: null };
	}

	shouldComponentUpdate () {
		return true;
	}

	componentDidCatch ( error, errorInfo ) {
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render () {
		const { errorInfo, error } = this.state;
		const { children } = this.props;
		const errorMessage = 'Something went wrong.';

		if ( errorInfo ) {
			return (
				<React.Fragment>
					<h2>
						{errorMessage}
					</h2>
					<details styleName='fragmentDetails'>
						{error && error.toString()}
						<br />
						{errorInfo.componentStack}
					</details>
				</React.Fragment>
			);
		}

		return children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	])
};

ErrorBoundary.defaultProps = { children: null };
