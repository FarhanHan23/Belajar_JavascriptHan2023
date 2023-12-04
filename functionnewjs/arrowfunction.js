// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Farhan", "Pagi"));

// catatan
//kalau parameter 1 tidak perlu pakai kurung dan return karena implisit return
// let panggilNama = (nama) => `Halo ${nama}`;
// console.log(panggilNama);

// kalau nggak ada parameter wajib pakai kurung
// let hello = () => `Hello World`;
// console.log(hello());

// contoh implementasi = mengetahui panjang setiap value dalam array
// let mahasiswa = ["Farhan Akmal", "Radhyan Pasha", "Rafli"];
// let jumlahhuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahhuruf);

// ujadikan object
// let jmlhhuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumlahhuruf: nama.length,
// }));
// console.table(jmlhhuruf);

///////////////////////////////////////////
/////////////////////////////////////////////

// konsep this pada arrow function
//constructor Object
// const Mahasiswa = function () {
//   (this.nama = "Farhan"),
//     (this.umur = 24),
//     (this.sayHello = function () {
//       console.log(
//         `Halo, nama saya ${this.nama}dan saya berumur ${this.umur} tahun.`
//       );
//     });
// };
// const Farhan = new Mahasiswa();

// arrow function
// const Mahasiswa = function () {
//   (this.nama = "Farhan"),
//     (this.umur = 24),
//     (this.sayHello = () => {
//       console.log(
//         `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`
//       );
//     });
// };
// const Farhan = new Mahasiswa();
//arrow function sebenarnya tidak memiliki konsep this
// const Mahasiswa = {
//   nama: "Farhan",
//   umur: 24,
//   sayHello: () => {
//     console.log(
//       `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`
//     ); // nama dan umur akan undefine
//   },
// };

///////////////////////////////////////
///////////////////////////////////////

const Mahasiswa = function () {
  (this.nama = "Farhan"),
    (this.umur = 24),
    (this.sayHello = function () {
      console.log(
        `Halo, nama saya ${this.nama}dan saya berumur ${this.umur} tahun.`
      );
    });

  //coba pakai fungsi set interval jadi ada perubahan tergantung kondisinya bisa setiap 500 mili second atau setengah detik
  setInterval(() => {
    console.log(this.umur++); // akan bertambar umurnya dan mencari umur di luar scope ini ke atasnya
  }, 500);
};
const Farhan = new Mahasiswa();
