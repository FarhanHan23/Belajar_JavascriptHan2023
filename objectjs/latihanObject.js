// Object Literal JS
// let mahasiswaUny = {
//   nama: "Farhan",
//   energi: 100,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
//   },
// };
// fungsi makan akan menambah energi
// cara manggilnya di console log inspect mahasiswa.makan(20)

/////////////////////////////////
/////////////////////////////////

//fungsi declaration = membuat template fungsi yang bisa dipanggil
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi; // ini membuat properti variabel object
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, energi kamu menjadi ${this.energi}!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${nama}, energi kamu berkurang menjadi ${this.energi}`);
//   };
//   return mahasiswa;
// }
// let Farhan = Mahasiswa("farhan", 120);

// Constructor = tidak perlu membuat variabel dan return
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi; // ini membuat properti variabel object
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, energi kamu menjadi ${this.energi}!`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${nama}, energi kamu berkurang menjadi ${this.energi}`);
  };
}
let Farhan = new Mahasiswa("Farhan", 130);
