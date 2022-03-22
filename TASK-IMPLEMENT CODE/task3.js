function fazzfood(harga, voucher, jarak, pajak) {
  let potonganHarga = 0;
  let ongkir = 0;
  let subTotal = 0;

  // 1. Menghitung voucher
  if (voucher === "DITRAKTIR60") {
    if (harga >= 25000) {
      let discHarga = harga * 0.6;
      if (discHarga <= 30000) {
        potonganHarga = discHarga;
      }
      if (discHarga > 30000) {
        potonganHarga = 30000;
      }
    } else {
      console.log(
        "Anda harus belanja minimal Rp 25.000 untuk menggunakan voucher ini"
      );
    }
  }

  if (voucher === "FAZZFOOD50") {
    if (harga >= 50000) {
      let discHarga = harga * 0.5;
      if (discHarga <= 50000) {
        potonganHarga = discHarga;
      }
      if (discHarga > 50000) {
        potonganHarga = 50000;
      }
    } else {
      console.log(
        "Anda harus belanja minimal Rp 50.000 untuk menggunakan voucher ini"
      );
    }
  }

  // 2. Menghitung jarak ongkir
  if (jarak <= 2) {
    ongkir = 5000;
  }
  if (jarak > 2) {
    ongkir = 5000 + (jarak - 2) * 3000;
  }

  // 3. Menghitung pajak
  if (pajak == true) {
    pajak = harga * 0.05;
  } else {
    pajak = 0;
  }

  // 4. Menghitung subtotal
  subTotal = harga - potonganHarga + ongkir + pajak;

  // 5. Output
  console.log("Harga = Rp " + harga);
  console.log("Potongan = Rp " + potonganHarga);
  console.log("Biaya Antar = Rp " + ongkir);
  console.log("Pajak = Rp " + pajak);
  console.log("SubTotal = Rp " + subTotal);
}
fazzfood(75000, "DITRAKTIR60", 5, true);
