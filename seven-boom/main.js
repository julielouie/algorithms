function sevenBoom(arr) {
  for (let index = 0; index < arr.length; index++) {
    const numSplit = arr[index].toString().split('');
    for (let innerIndex = 0; innerIndex < numSplit.length; innerIndex++) {
      if (numSplit[innerIndex] === '7') {
        return 'Boom!';
      }
    }
  }
  return 'there is no 7 in the array';
}

const sevenArr = [1, 2, 3, 4, 5, 6, 7];
const insideSeven = [12, 14, 15, 17, 23, 39];
const noSevenArr = [1, 2, 3, 4, 5, 6, 8];

console.log(sevenBoom(insideSeven));
