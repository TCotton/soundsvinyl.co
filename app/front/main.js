import React, { Component } from 'react';
import Home from './Categories/Home';
import Header from './Header/Header';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';

class Main extends Component {

	render () {
		return (
			<div>
				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Home />
				</ErrorBoundary>
			</div>
		)
	}
}

export default Main;


