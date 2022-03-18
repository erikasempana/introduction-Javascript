const getMonth = (callback) => {
  //...
};

// [1]
// const showMonth = (c) => {
//     // proses pengecekan
// }
// getMonth(showMonth)

// [2]
// getMonth((isError, data) => {
//     // proses pengecekan
// })

// output berhasil
// let error = false
// Januari
// Februari
// ...
// Desember

// output gagal
// let error = true
// Sorry Data Not Found | Error : Sorry Data Not Found

// ===========================================================================
const cekHariKerja = (day) =>
  new Promise((resolve, reject) => {
    // ...
  });

// parameter = "senin" | "selasa" | "rabu" | ... | "minggu"
// a
cekHariKerja("senin"); // tambahkan handling dengan then & catch

// b
// 1. siapkan fungsi yang nantinya digunakan untuk asyncawait
async function cek(day) {
  try {
    // proses dicoba
  } catch (error) {
    // proses gagal
  }
}
cek("senin");

// output berhasil
// jika param = senin - jum'at
// senin

// output gagal
// jika param = sabtu | minggu
// Hari ini bukan hari kerja | Error : Hari ini bukan hari kerja
