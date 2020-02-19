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

const seq1 = [7, 4, 5, 1];
const seq2 = [2, 3, 6];

const misSeq1 = [1, 4, 6, 5];
const misSeq2 = [2, 7, 8, 9];

const awkNum1 = [44, 46];
const awkNum2 = [45];

console.log(consecutiveCombo(awkNum1, awkNum2));
