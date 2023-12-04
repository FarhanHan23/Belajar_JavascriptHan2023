// Destructuring
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
//ngambil salah satu aja
// const jumlah = penjumlahanPerkalian(3, 4)[0];
// console.log(jumlah);
// const kali = penjumlahanPerkalian(3, 4)[1];
// console.log(kali);

// pakai destructuring
// const [jumlah, kali] = penjumlahanPerkalian(6, 8);
// console.log(kali);
// console.log(jumlah);

// contoh lain jika returnnya lebih banyak
// function kalkulasi(a, b) {
//   return [a + b, a * b, a / b, a - b];
// }
// const [jumlah, kali, bagi, kurang] = kalkulasi(10, 5);
// console.log(kali);
// console.log(jumlah);
// console.log(bagi);
// console.log(kurang);

// pakai object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { tambah, kali, bagi, kurang } = kalkulasi(10, 5);
// console.log(kurang);

/////////////////////////////////////////
///////////////////////////////////////

// Destructuring function arguments
const mhs1 = {
  nama: "farhan",
  umur: 26,
  email: "farhan@student.uny.ac.id",
  nilai: {
    tugas: 90,
    uts: 80,
    uas: 85,
  },
};
// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, umur saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//pecah manual
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// pakai destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, umur saya ${umur} tahun. Nilai uts saya : ${uts}`;
}
console.log(cetakMhs(mhs1));
