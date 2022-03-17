const printSegitiga = 5;

let hasil="";
    if(isNaN(printSegitiga) === true){
            console.log ("Data Harus Number!");
    }else {
        for (let i = printSegitiga; i > 0; i--) {
            for (let j = 1; j <= i; j++) {
                hasil += j;
            }
            hasil += "\n";
        }
    }
    console.log(hasil);