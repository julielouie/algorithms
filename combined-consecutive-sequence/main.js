function consecutiveCombo(a1, a2) {
  const combinedArr = a1.concat(a2);
  combinedArr.sort((a, b) => a - b);
  for (let index = 0; index < combinedArr.length - 1; index++) {
    if (combinedArr[index] + 1 !== combinedArr[index + 1]) {
      return false;
    }
  }
  return true;
}
