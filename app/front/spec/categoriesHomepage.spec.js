import CategoriesHomepage from '../categoriesHomepage.js';

describe('Component', () => {

	let component;

	beforeEach(() => {
		component = new CategoriesHomepage;
	});

	describe('CategoriesHomepage', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('has created a hook', () => {
			expect(component.render).toEqual(jasmine.any(Function));
		})
	});
});
