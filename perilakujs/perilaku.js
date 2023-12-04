// 2.1 Execution Context, Hoisting & Scope
// console.log(nama);
// let nama = "farhan"; // undefine karena deklarasi dibawah console.log

//creation phase pada global context = js akan mengecek apakah ada variabel atau function dalam code. kalau ada maka diubah dulu jadi undefine. kalau ada function maka diisi fungsi itu sendiri
// (hoisting) yaitu menaikkan dulu variabel atau fungsinya jika berada dibawah makannya isinya undefine
// window = global Object
// this = window

// execution phase di js dari atas ke bawah

// function membuat local execution context
// yg di dalamnya terdapat creation dan execution phase

/////////////////////////

// let nama = "Farhan Akmal";
// let username = "@farhannakmall";

// function cetakURL(username) {
//   let instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL(username));

// scope = cari dulu di lokal baru naik ke atas (global)

// latihan
// function satu() {
//   let nama = "Farhan";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// let nama = "Pasha";
// satu(); // ini akan dieksekusi pertama
// dua("Akmal"); // ini akan tampil dengan nama Pasha karena ngambil dari bawahnya
// console.log(nama); // ini akan dieksekusi terakhir
///////////////////////////////////
//////////////////////////////////

// lexical scope
// function init() {
//   let nama = "Farhan"; // local variable
//   function tampilNama() {
//     // inner function closure = punya akses ke variabel nama
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// function init() {
//   // let nama = "Farhan"; // local variable
//   function tampilNama(nama) {
//     // inner function closure = punya akses ke variabel nama
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Akmal"); // maka argumen yang dalam fungsi ini akan diekseskusi

// fungsinya bisa digunakan kapanpun dengan closure
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}.`);
  };
}
let selamatPagi = ucapkanSalam("Sore");
selamatPagi("Akmal"); // Halo Akmal, selamat Sore.
