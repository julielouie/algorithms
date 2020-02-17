function reorderDigits(arr, direction) {
  if (direction === 'asc') {
    for (let originalIndex = 0; originalIndex < arr.length; originalIndex++) {
      let currentNum = arr[originalIndex].toString().split('');
      for (let index = 0; index < currentNum.length; index++) {
        for (let index2 = 0; index2 < currentNum.length; index2++) {
          if (currentNum[index2] > currentNum[index2 + 1]) {
            let temp = currentNum[index2];
            currentNum[index2] = currentNum[index2 + 1];
            currentNum[index2 + 1] = temp;
          }
        }
      }
      arr[originalIndex] = parseFloat(currentNum.join(''));
    }
  } else if (direction === 'desc') {
    for (let originalIndex = 0; originalIndex < arr.length; originalIndex++) {
      let currentNum = arr[originalIndex].toString().split('');
      for (let index = 0; index < currentNum.length; index++) {
        for (let index2 = 0; index2 < currentNum.length; index2++) {
          if (currentNum[index2] < currentNum[index2 + 1]) {
            let temp = currentNum[index2];
            currentNum[index2] = currentNum[index2 + 1];
            currentNum[index2 + 1] = temp;
          }
        }
      }
      arr[originalIndex] = parseFloat(currentNum.join(''));
    }
  }
  return arr;
}

const ascArray = [515, 341, 98, 44, 211];
console.log(reorderDigits(ascArray, 'asc'));
console.log(reorderDigits(ascArray, 'desc'));
