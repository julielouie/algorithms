function checkAnagram(...args) {
  const words = [];
  for (const word of args) {
    const sorted = alphabetize(word);
    if (!words[0]) words.push(sorted);
    if (words[0] === sorted) continue;
    else return false;
  }
  return true;

  function alphabetize(word) {
    if (!word) return;
    return word.split('').sort().join('');
  }
}
