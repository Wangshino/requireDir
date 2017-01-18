const fs = require('fs')
const path = require('path')
const isJsFile = require('./utils.js')

let cache = {}

function requireDir(options) {
	let dirName
	if (typeof options === "string" && fs.statSync(options).isDirectory()) {
		dirName = options
	}

	const files = fs.readdirSync(dirName)
	for (let file of files) {
		let filePath = `${dirName}/${file}`
		if (fs.statSync(filePath).isDirectory()) {
			requireDir(filePath)
		} else if (isJsFile(file)) {
			let fileExtname = path.extname(file)
			let baseName = path.basename(file,fileExtname)
			let keys = Object.getOwnPropertyNames(cache)
			require(filePath)
		}
	}
}

module.exports = requireDir
