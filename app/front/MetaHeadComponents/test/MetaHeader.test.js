import React from 'react'
import MetaHeader from '../MetaHeader'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<MetaHeader
				canonical='http://example.com'
				title='This is a title'
			/>
		)
	})

	describe('MetaHeader', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component = renderer.create(
				<MetaHeader
					canonical='http://different-example.com'
					title='This is a different title'
				/>
			)

			expect(component).toBeDefined()
		})
	})
})
