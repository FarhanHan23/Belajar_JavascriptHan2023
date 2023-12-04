// contoh memasukkan value array ke beberapa variabel dengan kurung siku []
// const coba = ["satu", "dua", "tiga"];
// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);
//skipping items
// const [a, , c] = coba;
// console.log(a);
// console.log(c);

///////////////////////////////////////////

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]; // cara menukar isi dari variabel
// console.log(a); // sudah ketuker
// console.log(b); // sudah ketuker

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba(); // 1 masuk ke a dan 2 masuk ke b
// console.log(a);
// console.log(b);

// rest parameter
//ketika kita mau memasukkan ke variabel yang ga tau ada berapa, bisa pakai ...
// const [a, ...values] = [1, 2, 3, 4, 5, 6]; // isi array di sebelah kanan lebih banyak dari sebelah kiri
// console.log(a);
// console.log(values);

//////////////////////////////////////////
//////////////////////////////////////////

// contoh memasukkan object ke beberapa variabel dengan kurung kurawal {}
// const mhs = {
//   nama: "farhan",
//   umur: 26,
//   email: "farhan@student.uny.ac.id",
// };
// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// skipping items / melwatkan item yang ada
// const { nama, ,email } = mhs;
// console.log(nama);
// console.log(email);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "farhan",
//   umur: 26,
// });

// assign ke variabel baru
// const mhs = {
//   nama: "farhan",
//   umur: 26,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

//////////////////////////////////////

// Assign default value + assign ke variabel baru
// const mhs = {
//   nama: "farhan",
//   umur: 26,
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

///////////////////////////////////

// Rest Parameter
// const mhs = {
//   nama: "farhan",
//   umur: 26,
//   email: "farhan@student.uny.ac.id",
// };
// const { nama, ...values } = mhs;
// console.log(values);

////////////////////////////////////

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 1234,
  nama: "farhan",
  umur: 26,
  email: "farhan@student.uny.ac.id",
};

function getIdmhs({ id }) {
  return id;
}
console.log(getIdmhs(mhs)); // bakal dibongkar ke atas yg ada functionnya
