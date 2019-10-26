import React, { Component } from 'react'
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import CategoriesHomepage from './CategoriesHomepage'
import ErrorBoundary from '../errorBoundaries/ErrorBoundary'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import shallowCompare from 'react-addons-shallow-compare'

const articlesPerPage = 11;

export class Categories extends Component {
	static propTypes = {
		category: PropTypes.string,
		history: PropTypes.shape({
			push: PropTypes.func
		}),
		location: PropTypes.shape({
				pathname: PropTypes.string,
				search: PropTypes.string
		}),
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string,
				tag: PropTypes.string
			})
		}),
	}

	static defaultProps = {
		category: undefined,
		history: {
			push: () => {},
		},
		location: {
			params: {
				pathname: '',
				search: ''
			}
		},
		match: {
			params: {
				id: ''
			}
		}
	}

	constructor (props) {
		super(props)
		this.state = this.getInitialState()
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	getInitialState () {
		return {
			error: false,
			loading: false,
			dataArray: [],
			docs: [],
			page: 1,
			pages: Number,
			requestCompleted: false,
			total: Number
		}
	}

	componentDidMount () {
		this.getRequestCall()
	}

	shouldComponentUpdate (nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	componentDidUpdate (prevProps) {
		const {
			match: {
				params: { tag }
			}
		} = this.props

		if (tag !== prevProps.match.params.tag) {
			this.getRequestCall()
		}
	}

	getRequestCall () {
		const { category, history, location } = this.props;
		const { page } = this.state;

		// const currentPage = (page !== 1 ? ); // work out current page here

		// refactor both these API request into one request
		if (!category) {
			axios
				.get(
					`${homeURI}/apiV1/page/get?page=${page}&perPage=${articlesPerPage}`
				)
				.then(res => {
					this.setState({
						docs: res.data.docs,
						page: res.data.page,
						pages: res.data.pages,
						requestCompleted: true,
						total: res.data.total
					})
					if(page !== 1) {
						history.push(`${location.pathname}?page=${page}`);
					}
				})
				.catch(error => {
					new Error(error.toString())
				})
		}

		if (category) {
			axios
				.get(`${homeURI}/apiV1/page/findbytag/${category}`)
				.then(res => {
					this.setState({
						docs: this.addNumberToDataArray(res.data),
						requestCompleted: true,
						total: res.data.length
					})
				})
				.catch(error => {
					new Error(error.toString())
				})
		}
	}

	handleOnChange (direction) {
		const paginationFunc = () => {
			const { page, total } = this.state;
			const maximum = Math.ceil(total / articlesPerPage);

			if (direction === 'left') {
				// current should be a minimum of one
				return page - 1 >= 1 ? page - 1 : 1;
			}
			if (direction === 'right') {
				// current should be maximum of Math.ceil(total / articlesPerPage)
				return page + 1 < maximum ? page + 1 : maximum;
			}
		}

		this.setState(
			{
				page: paginationFunc()
			},
			() => {
				return this.getRequestCall()
			}
		)
	}

	addNumberToDataArray ([...data]) {
		data.forEach((currentValue, index) => {
			data[Number.parseInt(index)].position = Number.parseInt(index) + 1
		})

		return data;
	}

	render () {
		const { docs, page, pages, requestCompleted, total } = this.state;

		const { category } = this.props; // refactor -> use redux

		return (
			<ErrorBoundary>
				<CategoriesHomepage
					category={category}
					requestCompleted={requestCompleted}
					search={docs}
				/>
				<div className='PaginationContainer'>
					{requestCompleted && (
						<Pagination
							articlesPerPage={articlesPerPage}
							current={page}
							maximum={pages}
							onChangePagination={this.handleOnChange}
							total={total}
						/>
					)}
				</div>
			</ErrorBoundary>
		)
	}
}

export default withRouter(Categories)
