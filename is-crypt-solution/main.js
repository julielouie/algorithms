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
  let final = newCrypt[2];
  let result;

  if (first !== '0' && first[0] === '0' || second !== '0' && second[0] === '0') {
    return false;
  } else {
    result = +(first) + +(second);
    if (final === '0' || final[0] !== '0' && result === parseInt(final)) return true;
  }

  return false;
}
