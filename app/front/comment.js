import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import './comment.scss';
import Profile1 from '../assets/graphics/profiles/profile-1.svg';
import Profile2 from '../assets/graphics/profiles/profile-2.svg';
import Profile3 from '../assets/graphics/profiles/profile-3.svg';
import Profile4 from '../assets/graphics/profiles/profile-4.svg';
import Profile5 from '../assets/graphics/profiles/profile-4.svg';
import moment from 'moment';

class Comment extends React.Component {

	constructor (props) {
		super(props);
	}

	shouldComponentUpdate (nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render () {

		let values;
		const ProfileArray = [Profile1, Profile2, Profile3, Profile4, Profile5];

		if (Array.isArray(this.props.content)) {
			values = this.props.content.map((value, i) => {

				const content = this.props.content[i].content;
				const username = this.props.content[i].userName;
				const Profile = this.props.content[i].profile || 2;
				const date = moment(this.props.content[i].data).format('MMMM Do YYYY');
				const Profilesvg = `Profile${Profile}`;

				return (
					<div key={i} styleName='comment'>
						<div styleName='commentLeftColumn'>
							<Profilesvg />
						</div>
						<div styleName='commentRightColumn'>
							<p styleName='commentName'>{username} / {date}</p>
							<p styleName='commentText'>{content}</p>
						</div>
					</div>
				);
			});
		}

		return (
			<div>
				{values}
			</div>
		)
	}
}

Comment.propTypes = {
	content: PropTypes.any
}

export default Comment;
