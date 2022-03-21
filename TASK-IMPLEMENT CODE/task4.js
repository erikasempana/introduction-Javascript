function devideAndSort(num) {
  // SPLIT NUM BY "0"
  let theNum = num.toString();
  let splitNum = theNum.split(0);
  console.log("Angka tanpa 0 = " + splitNum);

  // MENGURUTKAN DAN MENYATUKAN ANGKA
  let newNum = "";
  for (let i = 0; i < splitNum.length; i++) {
    newNum += splitNum[i].split("").sort().join("");
  }
  console.log("Angka baru = " + newNum);
}
devideAndSort(5956560159466056);
//devideAndSort(3210654087901214);
