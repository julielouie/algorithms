function firstNotRepeatingCharacter(s) {
  const characters = {};
  const length = s.length;
  const count = 1;
  for (let index = 0; index < length; index++) {
    if (characters.hasOwnProperty(s[index])) {
      characters[s[index]] += count;
    } else {
      characters[s[index]] = 1;
      console.log(characters);
    }
  }
  for (let key in characters) {
    if (characters[key] === 1) {
      return key;
    }
  }
  return '_';
}

const string = "abacabad";

console.log(firstNotRepeatingCharacter(string));
