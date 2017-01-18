const assert = require('assert')
const isJsFile = require('../utils.js')

describe('isJsFile() test', () => {
	describe('.js file', () => {
		it('index.js should return true', () => {
			assert.equal(true, isJsFile('index.js'))
		}),
		it('index.test.js should return true', () => {
			assert.equal(true, isJsFile('index.test.js'))
		})
	})
	describe('.json file', () => {
		it('a.json should return true', () => {
			assert.equal(true, isJsFile('a.json'))
		})
	})
	describe('.coffee file', () => {
		it('c.coffee should return true', () => {
			assert.equal(true, isJsFile('c.coffee'))
		})
	})
	describe('other extname files', () => {
		it('index.cpp should return false', () => {
			assert.equal(false, isJsFile('index.cpp'))
		}),
		it('q.png should return false', () => {
			assert.equal(false, isJsFile('q.png'))
		}),
		it('test.py should return false', () => {
			assert.equal(false, isJsFile('test.py'))
		}),
		it('test.jpeg should return false', () => {
			assert.equal(false, isJsFile('test.jpeg'))
		})
	})
})
