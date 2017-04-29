const Libs = require("./index")
console.log(Libs)

const b = () => {
  console.log('b')
  console.log(Libs.A)
}

module.exports = b