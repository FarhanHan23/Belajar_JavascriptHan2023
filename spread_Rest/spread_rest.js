// Spread Operator
// Memecah iterable menjadi single element

// const mhs = ["Farhan", "akmal", "Muhammad"];
// console.log(...mhs); // dipecah tiap element
// console.log(...mhs[0]); // dipecah juga tiap element

// kapan penggunaan spread operator? untuk menggabungkan dua array
// const mhs = ["Farhan", "Akmal", "Muhammad"];
// const dosen = ["Han", "Hen", "Hun"];
// const orang = [...mhs, ...dosen]; // cara menggabungkannya (cara 1)
// const gabung = mhs.concat(dosen); // cara menggabungkannya pakai concat (cara 2)
// console.log(orang);
// console.log(gabung);

///////////////////

// meng-copy array namun tidak mengubah array sebelumnya
// const mhs = ["Farhan", "Akmal", "Muhammad"];
// const mhs1 = [...mhs]; // mencopy dari array mhs
// mhs1[0] = "han"; // menumuk dengan value baru
// console.log(mhs); // tidak berubah
// console.log(mhs1); // berubah

//////////////////////////////////

// mengambil li
// const liMhs = document.querySelectorAll("li");
// console.log(liMhs);
// cara lama pakai looping for
// const mhs = []; // bikin array kosong
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent); // memasukkan setiap li ke dalam array mhs
// }
// console.log(mhs);

// cara baru pakai map
// const mhs = [...liMhs].map((m) => m.textContent); // map memetakan setiap isi limhs
// console.log(mhs);

////////////////////////////////////

// challenge hover di setiap huruf farhan
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
