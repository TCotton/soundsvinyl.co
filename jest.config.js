module.exports = {
	rootDir: './',
	coverageThreshold: {
		'global': {
			'branches': 40,
			'functions': 40,
			'lines': 40,
			'statements': 40
		}
	},
	collectCoverageFrom: [
		'**/*.{js,jsx}'
	],
	moduleFileExtensions: [ 'js', 'json', 'jsx' ],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'node_modules',
		'jest.config.js',
		'server.js',
		'stylelint.config.js',
		'config/*',
		'postcss.config.js',
		'build/*',
		'mock/*',
		'webpack.config.js',
		'test/*',
		'assets/*',
		'node/__tests__/*',
		'nodeService/*',
		'dist/*'
	],
	coverageDirectory: '<rootDir>/test/coverage',
	moduleNameMapper: {
		'Mocks(.*)$': '<rootDir>/mock/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/mock/fileMock.js',
		'\\.(css|less|scss|sass)$': '<rootDir>/test/mock/styleMock.js'
	},
	transform: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.js$': 'babel-jest'
	},
	setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFiles: [`<rootDir>/loadershim.js`]
};
