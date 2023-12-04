// variabel global yang bisa digunakan dimanapun / object paling luar
// var a = 1;

// function scope
// function tes() {
//   var b = 3;
//   console.log(a); // tapi function bisa mengakses variabel global
// name conflict
// var a = 2; // ini menjadi a = 2
// a yang dalam function berbeda dengan yang di luar function menjadi variabel lokal
// }

// console.log(b); // maka tidak bisa karena var b berada dalam fungsi tes

// Rekursif
//fungsi yang memanggil dirinya sendiri
// function tampilAngka(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10); // ini akan terus terusan karena tidak ada batasannya jika tidak ada base case
// faktorial rekursif
function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
}
