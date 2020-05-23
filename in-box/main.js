function inBox(box) {
  let count = 1;
  for (let index = 1; index < box.length - 1; index++) {
    console.log(count++)
  }
}

const box = [
  "####",
  "#* #",
  "#  #",
  "####"
]; // true

// const box = [
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]; // false

console.log(inBox(box));
