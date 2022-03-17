let data =
{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//console.log(data.id)

//mengganti value pada properti dengan value baru menggunakan spread operator
let allData = {...data, name: "Erika Sempana", email : "sempanaerika@gmail.com", hobby: ["berenang", "bermain musik", "membaca"]}
console.log(allData);

//memanggil street dan city dengan menggunakan destructuring
const {street, suite, city, zipcode} = data.address;
console.log("Alamat pada jalan " +street + ", kota " +city);

