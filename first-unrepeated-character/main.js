function firstNotRepeatingCharacter(s) {
  const characters = {};
  const length = s.length;
  for (let index = 0; index < length; index++) {
    if (characters.hasOwnProperty(s[index])) {
      characters[s[index]] += 1;
    } else {
      characters[s[index]] = 1;
    }
  }
  for (let key in characters) {
    if (characters[key] === 1) {
      return key;
    }
  }
  return '_';
}
