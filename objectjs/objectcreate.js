// object.create
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, energi kamu menjadi ${this.energi}!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(
      `Halo ${this.nama}, energi kamu berkurang menjadi ${this.energi}`
    );
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(
      `Halo ${this.nama}, energi kamu bertambah menjadi ${this.energi}`
    );
  },
};
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi; // ini membuat properti variabel object
  return mahasiswa;
}
let Farhan = Mahasiswa("farhan", 120);
