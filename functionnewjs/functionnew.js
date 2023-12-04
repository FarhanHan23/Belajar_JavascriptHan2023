// arrow function
// for (let index = 20; index < 16; index--) {
//   console.log(index);
// }

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fazztrack");
//   } else if (i % 3 === 0) {
//     console.log("Fazz");
//   } else if (i % 5 === 0) {
//     console.log("track");
//   } else {
//     console.log(i);
//   }
// }

// function luasPersegiPanjang(panjang, lebar) {
//   return panjang * lebar;
// }

// function cetakSegitigaAngkaSamaTerbalik(jumlahBaris) {
//   for (let i = jumlahBaris; i >= 1; i--) {
//     let baris = "";
//     for (let j = 1; j <= i; j++) {
//       baris += i + " ";
//     }
//     console.log(baris);
//   }
// }

// // Contoh pemanggilan fungsi dengan 5 baris
// cetakSegitigaAngkaSamaTerbalik(5);

function hitungOngkir(jarak) {
  if (jarak <= 2) {
    return 5000; // Ongkos kirim 5000 jika jarak kurang dari atau sama dengan 2km
  } else {
    // Ongkos kirim 5000 ditambah 3000 untuk setiap km di atas 2km
    return 5000 + 3000 * (jarak - 2);
  }
}

// Contoh pemanggilan fungsi dengan jarak 3km
const jarak = 4;
const ongkir = hitungOngkir(jarak);
console.log(`Total ongkos kirim untuk jarak ${jarak}km: Rp. ${ongkir}`);
