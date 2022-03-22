function cekPalindrom(text) {
  let word = text.split(" "); // split text berdasarkan kata - untuk kondisi 1
  let textLow = text.toLowerCase(); // mengubah ke huruf kecil
  let splitWord = textLow.split(""); // split huruf termasuk spasi untuk kondisi 2

  console.log("Text diubah ke huruf kecil = " + textLow);
  console.log("Memisah text per-huruf= " + splitWord);

  // Cek jumlah kata pada text
  if (word.length <= 1) {
    return console.log("harus dua kata");
  }

  // Melakukan reverse text
  let hasil = "";
  for (let i = splitWord.length - 1; i >= 0; i--) {
    hasil += splitWord[i];
  }
  //pengecekan hasil reverse = text
  if (hasil == textLow) {
    console.log("kalimat ini _" + text + "_ adalah palindrom");
  } else {
    console.log("kalimat ini _" + text + "_ bukan kalimat palindrom");
  }
}
cekPalindrom("Malam Malam");
// cekPalindrom("Anda");
// cekPalindrom("selamat Malam");