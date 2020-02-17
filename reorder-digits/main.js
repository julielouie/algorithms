function reorderDigits(arr, direction) {
  let resultArray;
  if (direction === 'asc') {
    resultArray = arr.map(element => element.toString());
      for (let index = 0; index < resultArray.length; index++) {
      for (let index2 = 0; index2 < resultArray.length; index2++) {
        if (resultArray[index2] > resultArray[index2 + 1]) {
          let temp = resultArray[index2];
          resultArray[index2] = resultArray[index2 + 1];
          resultArray[index2 + 1] = temp;
        }
      }
    }
  } else if (direction === 'desc') {
    resultArray = arr.map(element => element.toString());
      for (let index = 0; index < resultArray.length; index++) {
        for (let index2 = 0; index2 < resultArray.length; index2++) {
          if (resultArray[index2] < resultArray[index2 + 1]) {
            let temp = resultArray[index2];
            resultArray[index2] = resultArray[index2 + 1];
            resultArray[index2 + 1] = temp;
          }
        }
      }
  }
  return resultArray;
}
