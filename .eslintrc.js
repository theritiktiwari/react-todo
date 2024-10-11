/* eslint-disable no-undef */
module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: [ 'react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:jsdoc/recommended' ],
	plugins: [ 'react', 'prettier', 'jsdoc' ],
	rules: {
		'prettier/prettier': 0,
		'react/prop-types': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'warn',
		'no-var': 'error',
		'prefer-const': 'error',
		eqeqeq: 'error',
		'no-empty': 'error',
		'no-trailing-spaces': 'error',
		'no-multi-spaces': 'error',
		'no-duplicate-imports': 'error',
		'brace-style': [ 'error', '1tbs' ],
		'keyword-spacing': 'error',
		'space-before-blocks': 'error',
		'space-infix-ops': 'error',
		'space-before-function-paren': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'no-multiple-empty-lines': [ 'error', { max: 1 } ],
		'space-in-parens': [ 'error', 'always' ],
		'template-curly-spacing': [ 'error', 'always' ],
		'react/jsx-curly-spacing': [
			'error', {
				when: 'always',
				children: true
			}
		],
		"jsdoc/require-jsdoc": 'error',
		"jsdoc/require-returns": 0,
		"require-jsdoc": 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
