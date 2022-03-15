function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (typeof (nilaiAwal) != "number" || typeof (nilaiAkhir) != "number") {
        return "Nilai harus Number";
    } if (!Array.isArray(dataArray)) {
        return "Nilai harus Array";
    } if (nilaiAwal > nilaiAkhir) {
        return "Nilai awal harus lebih kecil dari nilai akhir";
    } if (dataArray.length < 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
    const find = [];
    dataArray.forEach(function (element) {
        if (element > nilaiAwal && element < nilaiAkhir) {
            find.push(element);
        }
    })
    const urutFind = find.sort( (a, b) => a - b )
    if (urutFind.length === 0){
        return "Nilai tidak ditemukan"
    }
    return urutFind;
}

console.log(seleksiNilai(5, 20,[2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(4, 17 , [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));