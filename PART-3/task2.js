const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "Septemer",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month); //kalau tidak eror = dilanjutkan ke proses menampilkan bulan dengan metode map()
    } else {
      //kondisi true
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (err, month) => {
  //proses pengecekan
  if (err !== null) {
    //kalau hasil != null maka akan di tampilkan pesan error
    console.log(err.message);
  } else {
    //proses menampilkan bulan
    month.map((item) => {
      console.log(item);
    });
  }
};
getMonth(showMonth);

// TASK CALLBACK FUNCTION
