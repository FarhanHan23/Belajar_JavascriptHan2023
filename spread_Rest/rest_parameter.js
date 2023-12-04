// rest parameter hanya bisa dipakai di akhir parameter
//secara default di dalam fungsi ada variabel namanya argument
// function myFunc() {
// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs; // ini jadi array jika ditasmbah ... di parameter
// return arguments; // bisa dipakai jika parameternya di awalnya kosong
// return [...arguments]; // mengembalikan dalam bentuk array
//}
// console.log(myFunc(1, 2, 3, 4, 5));

/// contoh lain operasi aritmatika sesuai dengan angka yang ada di parameter
// function perkalian(...angka) {
//   let total = 1;
//   for (const a of angka) {
//     total *= a;
//   }
//   return total;
// }
// console.log(perkalian(1, 2, 3, 4, 5));

////////////////////////////

// array destructuring
// const kelompokliverpool = ["Farhan", "Salah", "Szoboslai", "Van djick"];
// const [kapten, wakilkapten, ...anggota] = kelompokliverpool;

// object destructuring
const team = {
  pm: "Farhan",
  Frontend: "Akmal",
  Backend: "Pasha",
  Devops: "Rasya",
};
const { pm, ...myTeam } = team;
console.log(myTeam);
