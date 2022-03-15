// 1. concat()
// metode untuk menambahkan dua atau lebih string dan mengembalikan string tunggal baru
// sintak => string.concat(string2, string3, ..., stringN);
// ex:

let string1 = "Hallo!";
let string2 = "Saya Erika";
let string3 = "Saya belajar Javascript";
let allString = string1.concat(" ", string2, ". ", string3, ".");
console.log(allString);


// 2. toString()
// Metode untuk mengubah nilai Array menjadi string
// sintak => array.toString();
// Ex:

let abjad = ["a", "b", "c", "d"]
let strAbjad = abjad.toString();
console.log(abjad); // Output: [ 'a', 'b', 'c', 'd' ]
console.log(strAbjad); // Output: a,b,c,d

// 3. join()
// Metode untuk menggabungkan niai array dengan menambahkan separator (pemisah)
// Sintak => array.join("saparator");
// Ex:

let num = [1, 2, 3, 4, 5, 6, 7]
let newNum = num.join(" and ");
console.log(newNum) // Output: 1 and 2 and 3 and 4 and 5 and 6 and 7

// 4. reverse()
// Metode untuk membalikkan urutan (dari belakang ke depan) nilai array
// Sintak => array.reverse()
// Ex: 
let num1 = [11, 12, 13, 14, 15, 16, 17]
let newNum1 = num1.reverse()
console.log(newNum1) // Output: [17, 16, 15, 14, 13, 12, 11]

// 5. sort()
// Metode untuk mengurutkan nilai array sesuai abjad atau meningkat
// Sintak => array.sort()
// Ex:
let numm = [1, 0, 7,4, 9, 8, 9, 2, 3, 7, 4, 6, 2, 3, 5]
let fruits = ["grape", "banana", "apple", "strowberry"]
let newNumm = numm.sort().toString()
let newFruits = fruits.sort().toString()
console.log(newNumm) // Output: 0,1,2,2,3,3,4,4,5,6,7,7,8,9,9
console.log(newFruits) // Output: apple,banana,grape,strowberry

// 6. splice()
// Metode untuk menambahkan dan membuang suatu nilai pada array
// sintak => array.spalice (indexAdd, sumRemove, newarrayAdd1, ..., newarrayAddN) 
// Ex:

let color = ["Red", "White", "Blue"]
color.splice(2, 1, "Orange"); // Artiny: Menambahkan nilai "Orange" pada posisi index [2] dan membuang 1 nilai pada posisi index [2} yaitu "Blue"
console.log(color.toString()); // Output: Red,White,Orange,

let color2 =["Red", "White", "Orange", "Blue"]
color2.splice(1,1, "Yellow", "Black"); // Artiny: Pada posisi index 1, akan dibuang 1 nilai yaitu "White" dan di tambahkan nilai "Yellow" dan "Black"
console.log(color2.toString()); // Output: Red,Yellow,Black,Orange,Blue


// 7. push()
// Metode untuk menambahkan nilai baru pada array
// Sintak => array.push(nilaiBaru)
// Ex:
 let angka = [0, 1, 2, 2, 3, 3]
angka.push(11, 100, 300);
console.log(angka.toString()) // Output: 0,1,2,2,3,3,11,100,300
 

// 8. map()
// Metode untuk melakukan iterasi objek dalam suatu array dan, dengan cara yang serupa seperti array tradisional, 
// memodifikasi konten dari setiap objek individu dan memberikan array yang baru. 
// Modifikasi ini dilakukan berdasarkan apa yang dikembalikan (return) dalam "function callback"
// Sintak => array.map(function(currentValue, index, arr), thisValue
// Ex: 

const data = [
    { name: 'Ana', hobby: 'Reading' },
    { name: 'Jhon', hobby: 'Swimming' },
    { name: 'Smith', hobby: 'Photography' }
]

const dataByHobby = data.map(item => {
    const container = {};

    container[item.name] = item.hobby;
    container.age = item.name.length * 5;

    return container;
})

console.log(dataByHobby);

/* 
Output: [
  { Ana: 'Reading', age: 15 },
  { Jhon: 'Swimming', age: 20 },
  { Smith: 'Photography', age: 25 }
]
*/

// 9. forEach()
// Metode untuk menimbulkan metode tertentu ke seluruh array
// Sintak => array.forEach(function callback(element, index, array) { statement })
// Current Value (wajib) – Nilai elemen array saat ini | Indeks (opsional) – Nomor indeks elemen saat ini | Array (opsional) – Objek array tempat elemen saat ini berada
// Ex:

let dataA = [1, 2, 3, 4, 5];
dataA.forEach(function tampil(element, index, dataA) {
    console.log("No ke " + index)
});
// Output: 
// No ke 0
// No ke 1
// No ke 2
// No ke 3
// No ke 4


// 10. split()
// Metode untuk memisahkan string (berdasar pemisah), dan hasilnya dalam bentuk array
// Sintak => string.split([separator][, limit]);
// Ex:

let text = "Saya bermain gitar";
let newText = text.split(" "); //dipisah berdasarkan spasi
console.log(newText); // output:[ 'Saya', 'bermain', 'gitar' ]
console.log(newText[0]) // menampilkan text [0] yang sudah di-split berdasar spasi | output: Saya

// 11. pop()
// Metode untuk membuang item terakhir pada array
// Sintak => array.pop()
// Ex: 

let name1 = ["Ana", "Ani", "Ina", "Inu"];
name1.pop();
console.log(name1); // ['Ana', 'Ani', 'Ina']




