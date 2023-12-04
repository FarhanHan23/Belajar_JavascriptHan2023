// Belajar Object Javascript
// Membuat Object secara Literal
// let mahasiswa = {
//   nama: "Muhammad Farhan Akmal",
//   lulus: true,
//   IPSemester: [3.5, 3.25, 3.7, 3.4, 3.04],
//   IPKumulatif: function () {
//     var total = 0;
//     var ips = this.IPSemester;
//     for (let i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
//   alamat: {
//     jalan: "jl Kuning Gedong No.434",
//     kota: "Magelang",
//     provinsi: "Jawa Tengah",
//   },
// };
// mahasiswa.IPKumulatif; // cara manggil di console

/////////////////////////////////////////
////////////////////////////////////////

// membuat object dengan function declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// let mhs2 = buatObjectMahasiswa(
//   "Muhammad Rifky",
//   "5494823922",
//   "rifky@student.uny.ac.id",
//   "Ilmu Kanuragan"
// ); // urutannya disesuaikan dengan argumennya

////////////////////////////////

// membuat Object dengan Constructor
// function mahasiswa(nama, nim, email, jurusan) {
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
//   this.jurusan = jurusan;
// }
// let mhs4 = new mahasiswa(
//   "Muhammad Rifky",
//   "5494823922",
//   "rifky@student.uny.ac.id",
//   "Ilmu Kanuragan"
// );
