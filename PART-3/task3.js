// HANDLING DENGAN TRY CATCH
const cekBendaLangit = (benda) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const bendaLangit = ["asteroid", "awan", "bulan", "bintang", "galaksi", "komet", 
                                 "matahari", "meteor", "meteoroid", "nebula", "planet", "satelit"] 
            let hasil = bendaLangit.find((item) => {
                return item == benda
            })
            if (hasil){
                resolve(hasil)
            } else {
                reject (new Error("Bukan salah satu dari benda Langit"))
            }
        }, 1000)
    })
}

const tampilBenda = async (benda) => {
    try{
        resultBenda = await cekBendaLangit (benda);
        console.log(resultBenda) 
    }
    catch (error){
        console.log(error.message)
    }
}
tampilBenda("meja")
tampilBenda("matahari") 


//  HANDLING DENGAN THEN CATCH
// function namaAnggota(nama){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             const namaAnggota = ["Ana", "Ani", "Agung", "Andin"]
//             let cek = namaAnggota.find((item) =>{
//                 return item === nama
//             })
//             if(cek){
//                 resolve(cek)
//             } else{
//                 reject (new Error("Tidak terdaftar sebagai anggota"))
//             }
//         }, 2000)
//     })
// }

// namaAnggota("ana")
// .then((Response) => console.log(Response))
// .catch((err) => console.log(err));

// TASK 3 MEMBUAT 2 FUNGCTION - PROMISE YANG DI HANDLE DENGAN TRY/CATCH DAN ATAU THEN/CATCH  