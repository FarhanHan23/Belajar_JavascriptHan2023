// callback synchronous
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }
// tampilkanPesan(halo);

/////////////////////////////
///////////////////////////////

// asynchronous
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.Nama);
// });
// console.log("selesai");

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     // console.log(JSON.parse(result));
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.Nama));
//   },
//   () => {}
// );

// pakai jquery
// $.ajax({
//   url: "data/mahasiswa.json",
//   success: (mhs) => {
//     mhs.forEach((m) => console.log(m.Nama));
//   },
//   error: () => {},
// });
// console.log("selesai");

// mencari film
$.ajax({
  url:
});
