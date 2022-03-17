function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // bila tipe nilaiAwal atau nilaiAkhir berupa string
    if (typeof (nilaiAwal) != "number" || typeof (nilaiAkhir) != "number") {
        return "Nilai harus Number"; //return: untuk menghentikan proses bila kondisi terpenuhi dan menampilkan stetment
    } if (!Array.isArray(dataArray)) { //jika dataArray tidak bertipe Array
        return "Nilai harus Array";
    } if (nilaiAwal > nilaiAkhir) { //jika nilaiAwal > nilai akhir
        return "Nilai awal harus lebih kecil dari nilai akhir";
    } if (dataArray.length < 5) { //jika nilai data array berjumlah < 5
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
    const find = [];
    dataArray.forEach(function (element) { 
        if (element > nilaiAwal && element < nilaiAkhir) { // untuk mencari scr looping bila nilaiAkhir < element > nilaiAwal
            find.push(element); // elemen yang sesuai kondisi ditambahkan pada find=[]
        }
    })
    const urutFind = find.sort( (a, b) => a - b ) //mengurutkan hasil find = [] yang sudah terkumpul dari terkecil ke terbesar menjadi urutFind
    if (urutFind.length === 0){ //kalau tidak ada nilai didalam urutFind, maka tampilkan stetment
        return "Nilai tidak ditemukan"
    }
    return urutFind;
}

console.log(seleksiNilai(5, 20,[2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])); //nilaiAwal < nilaiAkhir
console.log(seleksiNilai(4, 17 , [2, 25, 4])); // jumlah angka dalam array kurang dari 5
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); // tdk ada angka diantara 5 dan 17 di dataArray