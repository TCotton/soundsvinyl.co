import React, { Component } from 'react';
import axios from 'axios';
import { homeURI } from '../../helper_constants';
import CategoriesHomepage from './CategoriesHomepage';
import ErrorBoundary from '../errorBoundaries/ErrorBoundary';

export class Categories extends Component {

	constructor (props) {
		super(props);

		this.state = {
			pages: [],
			requestCompleted: false
		};

		console.dir(this.match);
	}

	render () {
		const { pages, requestCompleted } = this.state;

		return (
			<ErrorBoundary />
		)
	}
}

export default Categories;
