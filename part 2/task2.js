function searchName(search, limit, callback){
    const names = 
    [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ];

    let find = [];
    //menentukan limit output nama yang ditampilkan 
    for (let i = 0; i < names.length; i++) {
        if (find.length >= limit) { 
            break;
        }
        if (callback(search, names[i])){
            find.push(names[i]);  
        }
    }
    callback (search, limit);
    return find;
}

function searchString(search, name){
    let isFound = false;
    for (let i = 0; i < name.length; i++) {
    // looping untuk mencocokkan kata (search) pada tiap 2 kata pada name, mis: abigail => ab, bi, ig, ga, ai, il
        if (search.toLowerCase() === name.slice(i, i + search.length).toLowerCase()) {     // slice berdasarkan panjang search
            isFound = true; //kalau benar ada kata (search) yang sama atau sesuai, maka hasilnya akan di push kedalam find=[]
           break;
        }
    } 
    return isFound;
}
console.log(searchName("an", 3, searchString))