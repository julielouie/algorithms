function stringCode(sentence) {
  const separatedLowCase = sentence.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(' ');
  const splitLetters = separatedLowCase.map(element => element.split(''));
  let consonants = [];
  let vowels = [];
  splitLetters.forEach(element => {
    let consCount = 0;
    let vowCount = 0;
    for (let index = 0; index < element.length; index++) {
      if (element[index] !== 'a' && element[index] !== 'e' && element[index] !== 'i' && element[index] !== 'o' && element[index] !== 'u') {
        consCount++;
      } else if (element[index] === 'a' || element[index] === 'e' || element[index] === 'i' || element[index] === 'o' || element[index] === 'u') {
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

console.log(stringCode('I\'d like to drink my first glass of champagne.'));
