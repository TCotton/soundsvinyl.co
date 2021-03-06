import React from 'react'
import renderer from 'react-test-renderer'
import CommentsForm from '../CommentsForm'
import { MemoryRouter as Router } from 'react-router-dom'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<Router>
				<CommentsForm
					comments={[]}
					commentsMessage='a message here'
					disabled
					onFormSubmit={() => {}} // eslint-disable-line
					onInputChange={() => {}} // eslint-disable-line
					success
				/>
			</Router>
		)
	})

	describe('Comment', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})
	})
})
