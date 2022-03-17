// Variable ----------------------------------------------
var nama = "Tri" //var bisa di ubah
nama = "Erika"

console.log(nama);

//var = Erika
//let = Tri
//Const = Error: Assigmment to constant variable.

let x = 10
if (x == 10) {
    const x = 20
    console.log(x)
}

console.log(x)

// const = 20 | 10
// let = 20  | 10
// var = 20 | 20

const name = "Bagus"
function replaceName() {
    var name = "Tri"
    console.log(name)
}
console.log(name)
replaceName()

// var = bagus | Tri
// let = bagus | Tri
// const = bagus | Tri

// Data Type ---------------------------------------------------------------------
// Primitif
// String = ' ' | " " | ` `
// Number = 0-9 | decimal *batas maksimal 15 angka
//  Boolean = true | false
// Null = null
//Undefined = undefined | tidak diberikan nilai sama sekali

const data = 1234567899999999999999 //karena lebih dari 15 angka = 1.2345679e+21
console.log(typeof data)
if(typeof data !== 'string'){
    console.log('Bernilai string')
}

//Object = {property: value}
//Array = []

// const data = [1, 2, 3]
const data1 = ["Meja", "Kursi"]
const biodata = {
    nama : "Bagus Tri Harjanto",
    age : 17
}
biodata.age = 5
data1[0] ="Kipas"

console.log(data1)