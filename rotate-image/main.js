function rotateImage(a) {
  const newA = [];
  let innerLength = a[0].length;
  for (let index = a.length - 1; index > -1; index--) {
    if (innerLength === 0) innerLength = a[0].length;


  }
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateImage(a));
