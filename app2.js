const validator = require('validator')
const chalk = require("chalk");
const getNotes = require('./notes.js')

require('./util.js')
require('./notes.js')

const name = 'Andrew'
console.log(name)

const notes = getNotes
console.log(notes())

console.log(validator.isURL('sayem@example.com'))

console.log(chalk.green(validator.isURL('sayem@example.com')))

console.log(chalk.bold.inverse.red(validator.isURL('sayem@example.com')))




