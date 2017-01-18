const requireDir = require('../index')
const assert = require('assert')

describe('requireDir() test', () => {
	describe('src/ dir test', () => {
		it('', () => {
			let modules = requireDir(`${__dirname}/src`)
			assert.equal(require.cache[`${__dirname}/src/abc/a.json`].exports.path, 'src/abc/a.json')
		})
	})
})
