function stringCode(sentence) {
  const separatedLowCase = sentence.toLowerCase().split(' ');
  const splitLetters = separatedLowCase.map(element => element.split(''));
  let consonants = [];
  let vowels = [];
  splitLetters.forEach(element => {
    let consCount = 0;
    let vowCount = 0;
    for (let index = 0; index < element.length; index++) {
      if (element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u') {
        consCount++;
      } else if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
        vowCount++;
      }
    }
    consonants.push(`${consCount}`);
    vowels.push(`${vowCount}`);
  });
  consonants = consonants.join(' ');
  vowels = vowels.join(' ');
  return [consonants, vowels];
}
