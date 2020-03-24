function firstDuplicate(a) {
  let temp;
  let tempIndex = [];
  for (let outerIndex = 0; outerIndex < a.length; outerIndex++) {
    temp = a[outerIndex];
    a.forEach((element, index) => {
      if (tempIndex[element] === undefined) {
        if (temp === element && outerIndex !== index) {
          tempIndex.push({ [temp]: [outerIndex, index] });
        }
      }
    });
  }
  return tempIndex
}

const a = [2, 1, 3, 5, 3, 2];

console.log(firstDuplicate(a));
