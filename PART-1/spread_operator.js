const hobby = ["swiming", "gaming"]
const hobby2 = ["karaoke"]
const allHobby = [...hobby2, "hiking", ...hobby]
console.log(allHobby)

// output: [ 'karaoke', 'hiking', 'swiming', 'gaming' ]

const obj1 = {foo: "bar"}
const obj2 = {bar: "foo"}
const allObject = {...obj1, ...obj2, foo: "Bagus", barr: "Tri"}
console.log(allObject)

// output: { foo: 'Bagus', bar: 'foo', barr: 'Tri' }

const obj = {name: "Bagus"}
const arr = [1]
const result1 = [obj, ...arr] // harus seperti ini jadi object tidak menerapkan spread operator agar tidak error
const result2 = {...obj, ...arr, '2': 'Hello'} // nilai dari arr akan dapat dimasukkan ke object dengan properti mengambil dari index
console.log(result1)
console.log(result2) 

// output result1 :[ { name: 'Bagus' }, 1 ]
// output result2 : { '0': 1, '2': 'Hello', name: 'Bagus' }