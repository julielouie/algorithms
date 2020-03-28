function rotateImage(a) {
  let imgStr = '';
  let innerLength = a[0].length - 1;
  let count = 0;
  for (let index = a.length - 1; index > -1; index--) {
    let innerA = a[index][count];
    imgStr += innerA + ' ';
    if (index === 0 && count === innerLength && innerA === a[0][innerLength]) {
      const lastSpace = imgStr.lastIndexOf(' ');
      imgStr = imgStr.slice(0, lastSpace);
      break;
    }
    if (index === 0) {
      imgStr += '--';
      count++;
      index = a.length;
    }
    if (count === innerLength + 1) count = 0;
  }
  let newArray = imgStr.split(' --');
  newArray = newArray.map(element => {
    return element.split(' ').map(Number);
  })
  return newArray;
}

const a = [
  [10, 9, 6, 3, 7],
  [6, 10, 2, 9, 7],
  [7, 6, 3, 8, 2],
  [8, 9, 7, 9, 9],
  [6, 8, 6, 8, 2]
];

console.log(rotateImage(a));
