// contoh template literal pakai backtick dan dollar
// let nama = "Farhan Akmal";
// let umur = 24;

// console.log(`Halo semuanya nama saya ${nama} dan umur saya ${umur} tahun`);

// embedded expression
// console.log(`${5 + 4}`);
// console.log(`${alert("Halo semuanya")}`);
// let x = 10;
// console.log(`${x % 2 === 0 ? "genap" : "ganjil"}`);

// HTML Fragment
// const mahasiswa = {
//   nama: "Muhammad Farhan Akmal",
//   umur: 24,
//   nim: 15738292,
//   email: "Farhan@student.uny.ac.id",
// };
// const el = `<div class="mhs">
// <h2>${mahasiswa.nama}</h2>
// </div>`;
// console.log(el);

/////////////////////////////

// tagged template
// const nama = "Farhan Akmal";
// const umur = 24;
// literal ersebut akan masuk menjadi paramete fungsi
// function coba(strings, ...values) {
// return values; // titik 3 akan menjadi values dari expression yg berada di dalam backtick
// let result = "";
// strings.forEach((str, i) => {
//   result += `${str}${values[i] || ""}`;
// });
// return result;
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
// const str = coba`Halo nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// contoh penerapan highlight
const nama = "Farhan Akmal";
const umur = 24;
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}
const str = highlight`Halo nama saya ${nama}, umur saya ${umur} tahun.`;
document.body.innerHTML = str;
