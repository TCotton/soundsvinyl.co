/* eslint-disable react/jsx-max-props-per-line */
import React, { Component } from 'react';
import Nav from './Navigation/Nav';
import { Route, Switch } from 'react-router-dom';
import Main from './main';
import Tags from './Tags';
import RecordListing from './recordListing';
import Contact from './Contact/Contact';
import AboutUs from './about';
import MyAccount from './Account/MyAccount';
import VinylCharts from './vinylCharts';
import Sitemap from './Sitemap/Sitemap';
import Error from './error';
import Footer from './Footer/Footer';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';
import CommentsPolicy from './Comments/CommentsPolicy';

export default class Wrapper extends Component {

	render () {
		return (
			<div className='wrapper'>
				<ErrorBoundary>
					<Nav />
				</ErrorBoundary>
				<Switch>
					<Route
						component={Main}
						exact path='/'
					/>
					<Route
						component={Tags}
						path='/tags/:tag'
					/>
					<Route
						component={RecordListing}
						path='/:slug/:id'
					/>
					<Route
						component={Contact}
						path='/contact'
					/>
					<Route
						component={AboutUs}
						path='/about-us'
					/>
					<Route
						component={MyAccount}
						path='/my-account'
					/>
					<Route
						component={VinylCharts}
						path='/vinyl-singles-top-30-chart'
					/>
					<Route
						component={CommentsPolicy}
						path='/comments-policy'
					/>
					<Route
						component={Sitemap}
						path='/sitemap'
					/>
					<Route
						component={Error}
						path=''
					/>
				</Switch>
				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>
			</div>
		)
	}

}
