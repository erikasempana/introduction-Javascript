// console.log("Hello World !")


// function(exports, requare, modules,__filename,__dirname){
//     console.log("Hello World !")
// }

// console.log(__filename)
// console.log(__dirname)

// cara import dari biodata => name.js
//[1]
// const data = require("./name")
// console.log(data)

// [2]
// const {name, age} = require("./name")
// console.log(name)
// console.log(age)


//  [./] = mencari file/ folder di level yang sama
//  [../] = mencari file keluar 1 folder
// "../part3/test.js"
//   [.../] =mencari file keluar 2 folder, dst.

// [3]
const data = require("./name") //cara import
console.log(data.biodata)
console.log(data.fullName())