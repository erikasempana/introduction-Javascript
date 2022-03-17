const mtk = 89;
const bahasaIndonesia = 90;
const bahasaInggris = 90;
const ipa = 90;
let rata_rata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;

console.log("Rata-rata = " +rata_rata);

 if(rata_rata >= 90 && rata_rata <=100){
      console.log("Grade = A")
  } else if(rata_rata >= 80 && rata_rata < 90){
      console.log("Grade = B")
  } else if(rata_rata >= 70 && rata_rata < 80){
      console.log("Grade = C")
  }else if(rata_rata >= 60 && rata_rata < 70){
      console.log("Grade = D")
  }else if(rata_rata >= 0 && rata_rata <60){
      console.log("Grade = E")
  } 


