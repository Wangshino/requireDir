const _ = require('lodash')

function isJsFile(file) {
	const ext = fileExt(file)
	let valid = ['js', 'json', 'node', 'coffee']

	valid.filter(function(ext) {
		return ext === 'js' || ext === 'coffee'
	})

	return _.isString(ext) && valid.indexOf(ext) !== -1
}

function fileExt(file) {
	try {
		return file.split('.').pop().toLowerCase().trim()
	} catch(e) {
		return ''
	}
}

module.exports = isJsFile
