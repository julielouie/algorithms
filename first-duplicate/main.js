function firstDuplicate(a) {
  let temp;
  let tempIndex = [];
  for (let outerIndex = 0; outerIndex < a.length; outerIndex++) {
    temp = a[outerIndex];
    tempIndex.push({[temp]: outerIndex});
    a.forEach((element, index) => {
      if (temp === element && outerIndex !== index) {
        tempIndex.push({ [temp]: index });
      }
    });
  }
  return tempIndex
}

const a = [2, 1, 3, 5, 3, 2];

console.log(firstDuplicate(a));
