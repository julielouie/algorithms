function stringCode(sentence) {
  const separatedLowCase = sentence.toLowerCase().split(' ');
  const splitLetters = separatedLowCase.map(element => element.split(''));
  let consCount = 0;
  let vowCount = 0;
  const counting = splitLetters.map(element => {
    for (let index = 0; index < element.length; index++) {
      if (element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u') {
        consCount++;
      } else if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
        vowCount++;
      }
    }
  })
}
