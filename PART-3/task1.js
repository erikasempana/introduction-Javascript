const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { // output akan tampil sesuai waktu yang di set
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find ((item) => {
                return item === day
            }) 
            if(cek){ // kalau hari yang dimasukkan sesuai dengan yang ada di dataDay, maka hasilnya masuk ke resolve dan di teruskan ke (.then dan try)
                resolve(cek)
            }else { // kalau hari yang dimasukkan bukan hari yang ada di dataDay, maka hasilnya akan masuk ke reject dan di teruskan ke (.catch dan catch)
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 3000)
    })
}

//a. HANDLING DENGAN THAN CATCH
cekHariKerja ("sabtu") 
.then(response => console.log(response))
.catch((error) => console.log(error));

//b. HANDLING DENGAN TRY CATCH (ASYNC/AWAIT)
const tampilHari = async (day) => {
    try{
        resultDay = await cekHariKerja(day);
        console.log(resultDay)
    }
    catch (error){
        console.log(Error)
    }
}
tampilHari("senin")

// TASK PROMISE (.then & .catch) & ASYNC/AWAIT (try - catch)