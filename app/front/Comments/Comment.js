import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './comment.scss'
import Profile1 from '../../assets/graphics/profiles/profile-1.svg'
import Profile2 from '../../assets/graphics/profiles/profile-2.svg'
import Profile3 from '../../assets/graphics/profiles/profile-3.svg'
import Profile4 from '../../assets/graphics/profiles/profile-4.svg'
import Profile5 from '../../assets/graphics/profiles/profile-4.svg'
import moment from 'moment-mini'

class Comment extends Component {
	static propTypes = {
		content: PropTypes.arrayOf(
			PropTypes.shape({
				content: PropTypes.string,
				data: PropTypes.string,
				userName: PropTypes.string
			})
		).isRequired
	}

	render () {
		let values
		const ProfileArray = [Profile1, Profile2, Profile3, Profile4, Profile5]
		const { content } = this.props

		if (Array.isArray(content)) {
			values = content.map((value, i) => {
				const content = content[Number.parseInt(i)].content
				const username = content[Number.parseInt(i)].userName
				const date = moment(content[Number.parseInt(i)].data).format(
					'MMMM Do YYYY'
				)
				const RandomProfile =
					ProfileArray[Math.floor(Math.random() * ProfileArray.length)]

				return (
					<div
						key={value}
						styleName='comment'
					>
						<div styleName='commentLeftColumn'>
							<RandomProfile />
						</div>
						<div styleName='commentRightColumn'>
							<p styleName='commentName'>
								{username}
								{'/'}
								{date}
							</p>
							<p styleName='commentText'>
								{content}
							</p>
						</div>
					</div>
				)
			})
		}

		return (
			<div>
				{values}
			</div>
		)
	}
}

export default Comment
