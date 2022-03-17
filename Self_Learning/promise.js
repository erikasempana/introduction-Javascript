// MEMBUAT PROMISE 
// mengatur stated fullfiled dan Reject => resolved() atau reject()

let janjian = new Promise ((resolve, reject) => {
// salah satu dari 2 callback berikut
// resolve("berhasil")
reject(new Error ("Janjian di batalkan"))
})

// MENGGUNAKAN PROMISE
// untuk menggunakan promise diatas gunakan then dan catch

janjian
.then((result) => {console.log (result)})
.catch((error) => {console.log (error)})

// Output code diatas ada 2 kemungkinan :
// 1. Jika comment pada resolve( ) di hapus maka hasilnya “berhasil”
// 2. Jika comment pada reject( ) di hapus maka hasilnya “Janji di batalkan”

