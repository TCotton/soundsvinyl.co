import Header from '../header.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new Header;
	});

	describe('Header', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
