//CommonJS, every file is module (by default)
//modules - encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

sayHi(names.john)
sayHi(names.susan)
console.log(data)

//When you import, you invoke the code in the module
require('./7-mind-grenade')