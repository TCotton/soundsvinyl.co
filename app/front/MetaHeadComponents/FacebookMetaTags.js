import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class FacebookMetaTags extends PureComponent {
	static propTypes = {
		canonical: PropTypes.string.isRequired,
		faceBookDescription: PropTypes.string.isRequired,
		faceBookTitle: PropTypes.string.isRequired
	}

	render () {
		const { faceBookTitle, canonical, faceBookDescription } = this.props

		return (
			<React.Fragment>
				<meta
					content='soundsvinyl.co, Vinyl Forever, Music For All'
					property='og:site_name'
				/>
				<meta
					content={faceBookTitle}
					property='og:title'
				/>
				<meta
					content={canonical}
					property='og:url'
				/>
				<meta
					content={faceBookDescription}
					property='og:description'
				/>
				<meta
					content='article'
					property='og:type'
				/>
			</React.Fragment>
		)
	}
}

export default FacebookMetaTags
