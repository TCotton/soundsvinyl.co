import React, { Component } from 'react';
import axios from 'axios';
import { homeURI } from '../../helper_constants';
import CategoriesHomepage from './CategoriesHomepage';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../errorBoundaries/ErrorBoundary';
import PropTypes from 'prop-types'

export class Categories extends Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				tag: PropTypes.string
			})
		})
	};

	static defaultProps = {
		match: {
			params: {
				id: ''
			}
		}
	};

	constructor ( props ) {
		super( props );

		this.state = {
			pages: [],
			requestCompleted: false
		};
	}

	componentDidMount () {
		const { match: { params: { tag } } } = this.props;

		if( tag ) {
			axios.get( `${homeURI}/apiV1/page/findbytag/${tag}` )
				.then( res => {

					this.setState( {
						pages: res.data,
						requestCompleted: true
					})
				});
		}
	}

	render () {
		const { pages, requestCompleted } = this.state;

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					requestCompleted={requestCompleted}
					search={pages}
				/>
			</ErrorBoundary>
		)
	}
}

export default withRouter( Categories );
