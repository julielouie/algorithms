function reorderDigits(arr, direction) {
  let resultArray;
  if (direction === 'asc') {
    resultArray = arr.map(element => {
      const strElem = element.toString();
      for (let index = 0; index < strElem.length; index++) {
      for (let index2 = 0; index2 < strElem.length; index2++) {
        if (strElem[index2] > strElem[index2 + 1]) {
          let temp = strElem[index2];
          strElem[index2] = strElem[index2 + 1];
          strElem[index2 + 1] = temp;
        }
      }
    }
    });
  } else if (direction === 'desc') {
    resultArray = arr.map(element => {
      const strElem = element.toString();
      for (let index = 0; index < strElem.length; index++) {
        for (let index2 = 0; index2 < strElem.length; index2++) {
          if (strElem[index2] > strElem[index2 + 1]) {
            let temp = strElem[index2];
            strElem[index2] = strElem[index2 + 1];
            strElem[index2 + 1] = temp;
          }
        }
      }
    });
  }
  return resultArray;
}
