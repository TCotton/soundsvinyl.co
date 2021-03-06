import React from 'react'
import ErrorBoundary from '../ErrorBoundary'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import '../../../../enzymeConfig';

describe('Component', () => {
	let component
	let render
	let componentInstance

	beforeEach(() => {
		component = renderer.create(<ErrorBoundary />)
		componentInstance = component.getInstance()
	})

	describe('ErrorBoundary', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		describe('should return null if default (null) state error is unchanged', () => {
			beforeEach(() => {
				render = componentInstance.render()
			})

			it('', () => {
				expect(render).toEqual(null)
			})
		})

		describe('state error is default (null) then null default is returned', () => {
			beforeEach(() => {
				componentInstance.setState({ errorInfo: 'error! error! error!' })
				render = componentInstance.render()
			})

			it('', () => {
				expect(render).toEqual(expect.any(Object))
				expect(render).not.toEqual(null)
			})
		})
	})

	describe('When a JS error is caught in a child component', () => {
		let ErrorBoundaryComponent;
		let $error = 'Error';

		beforeAll(() => {
			ErrorBoundaryComponent = shallow(
				<ErrorBoundary>
					<h1>
						{$error}
					</h1>
				</ErrorBoundary>
			)
			ErrorBoundaryComponent.instance().componentDidCatch(true, 'oh nooos an error')
			ErrorBoundaryComponent.update();
		})

		it('should update the state to indicate an error', () => {
			expect(ErrorBoundaryComponent.instance().state.error).toBeTruthy()
		})

		it('should not render the child component', () => {
			expect(ErrorBoundaryComponent.find('h1').exists()).toBeFalsy()
		})
	})
})
