function rotateImage(a) {
  const newA = [];
  let innerLength = a[0].length - 1;
  let count = 0;
  for (let index = a.length - 1; index > -1; index--) {
    let innerA = a[index][count];
    if (count === innerLength) count = 0;
    if (a[index][count] === a[0][innerLength]) break;
  }
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateImage(a));
