// pembuatan object dengan prototype
// javascript sudah otomatis membuatkan object bernama this
// function Mahasiswa(nama, energi) {
// let mahasiswa = Object.create(methodMahasiswa);
// this.nama = nama;
// this.energi = energi; // ini membuat properti variabel object
// return mahasiswa;
//}
// membuat object tinggal langsung dengan prototype karena prototype sudah menjadi object parent default di javascript
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan. kamu memakan energi sebanyak ${porsi}. Kamu baru saja menambah energi menjadi ${this.energi}`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat main. kamu menghabiskan energi sebanyak ${jam}. Energi kamu menjadi ${this.energi}`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${
//     this.nama
//   }, Selamat tidur. kamu bisa menambah energi sebanyak ${
//     jam * 2
//   }. Energimu sekarang menjadi ${this.energi}`;
// };
// let farhan = new Mahasiswa("Farhan", 100);

////////////////////////////////////
// versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan. kamu memakan energi sebanyak ${porsi}. Kamu baru saja menambah energi menjadi ${this.energi}`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat main. kamu menghabiskan energi sebanyak ${jam}. Energi kamu menjadi ${this.energi}`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${
      this.nama
    }, Selamat tidur. kamu bisa menambah energi sebanyak ${
      jam * 2
    }. Energimu sekarang menjadi ${this.energi}`;
  }
}

let farhan = new Mahasiswa("Farhan", 100);
