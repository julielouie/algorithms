function isCryptSolution(crypt, solution) {
  const solutionsObj = {};
  const newCrypt = [];
  let currentWord = '';
  solution.forEach(element => solutionsObj[element[0]] = element[1]);
  for (let index = 0; index < crypt.length; index++) {
    let word = crypt[index];
    for (let innerIndex = 0; innerIndex < word.length; innerIndex++) {
      // eslint-disable-next-line no-prototype-builtins
      if (solutionsObj.hasOwnProperty(word[innerIndex])) {
        currentWord += solutionsObj[word[innerIndex]];
      }
    }
    newCrypt.push(currentWord);
    currentWord = '';
  }

  let first = newCrypt[0];
  let second = newCrypt[1];
  let result;

  if (first !== '0' && first[0] === '0' || second !== '0' && second[0] === '0') {
    return false;
  } else {
    result = +(first) + +(second);
    if (result === parseInt(newCrypt[2])) return true;
  }

  return false;
}

const crypt1 = ["SEND", "MORE", "MONEY"];
const solution1 = [
  ['O', '0'],
  ['M', '1'],
  ['Y', '2'],
  ['E', '5'],
  ['N', '6'],
  ['D', '7'],
  ['R', '8'],
  ['S', '9']
];

const crypt2 = ["TEN", "TWO", "ONE"];
const solution2 = [
  ['O', '1'],
  ['T', '0'],
  ['W', '9'],
  ['E', '5'],
  ['N', '4']
];

console.log(isCryptSolution(crypt2, solution2));
