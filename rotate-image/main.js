function rotateImage(a) {
  const newA = [];
  let imgStr = '';
  let innerLength = a[0].length - 1;
  let count = 0;
  for (let index = a.length - 1; index > -1; index--) {
    let innerA = a[index][count];
    imgStr += innerA;
    if (innerA === a[0][innerLength]) break;
    if (index === 0) {
      imgStr += ' ';
      count++;
      index = a.length;
    }
    if (count === innerLength + 1) count = 0;
  }
  let newArray = imgStr.split(' ');
  console.log(newArray)
}

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateImage(a));
