const removeDuplicates = function (numsArray) {
  let index = 0;
  numsArray.forEach(element => {
    if (element !== numsArray[index]) numsArray[++index] = element;
  });
  return index + 1;
};
