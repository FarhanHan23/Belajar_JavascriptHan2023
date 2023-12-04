// Pengisian Array
// Cara 1
// const arrayHan = ["han", "hin", "hun"]; // index dimulai dari 0, 1, 2
// console.log(arrayHan);
// console.log(arrayHan.length); // panjang array

// Cara 2
// const arrayKamu = [];
// arrayKamu[0] = "A";
// arrayKamu[1] = "I";
// arrayKamu[2] = "U";
// console.log(arrayKamu);

// Cara 3
// const arrayKita = new Array("Ronaldo", "Messi");
// console.log(arrayKita);

////////////////////////////////////////////
////////////////////////////////////////////

// Method Array
// const arrayBuah = ["🍍", "🍊", "🍎", "🍉", "🍌"]; // length = 5
// const semangka = arrayBuah.includes("🍉"); // apakah arraybuah mengandung semangka

// if (semangka) {
//   // mengetahui buah yang berada sebelum dan sesudah semangka
//   const posisiSemangka = arrayBuah.indexOf("🍉");
//   const indexBefore = posisiSemangka - 1;
//   const indexAfter = posisiSemangka + 1;
//   const before = arrayBuah[indexBefore];
//   const after = arrayBuah[indexAfter];
//   console.log(`Buah sebelum semangka adalah ${before}`);
//   console.log(`Buah setelah semangka adalah ${after}`);
//   console.log(`Buah semangka berada di posisi index ke-${posisiSemangka}`);
// } else {
//   console.log("Saya tidak tau posisi semangka");
// }

// const buahAkhir = arrayBuah[arrayBuah.length - 1];
// console.log(buahAkhir);

// const arrayBuahSaya = [];
// arrayBuahSaya["nanas"] = "🍍";
// arrayBuahSaya["strawberry"] = "🍎";
// console.log(arrayBuahSaya["nanas"]);

//////////////////////////////////

//array dalam array]
// const arrayBuah = ["🍍", 546, { apple: true }, ["semangka", "pisang"]];
// console.log(arrayBuah[3][0]); // semangka

//////////////////////////////////
/////////////////////////////////////

//splice array
// let arr = ["Muhammad", "Farhan", "Akmal"];
//splice(indexAwal,mauDihapusBerapa, elemenBaru1, dst)
// arr.splice(2, 0, "Rasya");
// console.log(arr.join("-"));

//slice array
//slice(awal,akhir)
// let arr2 = arr.slice(1, 3);
// console.log(arr2.join("-")); // akan mengambil array di index 1 dan 2

// foreach untuk setiap elemen
// arr.forEach(function (e, i) {
//   console.log("Mahasiswa ke " + i + " adalah: " + e);
// });

// map mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7];
// var angkabaru = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angkabaru.join("-"));

// sort untuk mengurutkan
// var angka = [1, 6, 7, 8, 2, 5, 3];
// angka.sort();
// console.log(angka.join("-"));

// filter mencari beberapa value spesifik array
// var angka = [1, 6, 7, 8, 2, 5, 3];
// var angka2 = angka.filter(function (x) {
//   // return x == 4;
//   return x > 5;
// });
// console.log(angka2);

//find hanya mencari 1 value saja
var angka = [1, 6, 7, 8, 2, 5, 3];
var angka2 = angka.find(function (x) {
  // return x == 4;
  return x > 5;
});
console.log(angka2); //6
