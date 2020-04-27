function checkAnagram(...args) {
  const words = [];
  for (const word of args) {
    const sorted = alphabetize(word);
    if (!words[0]) words.push(sorted);
    if (words[0] === sorted) return;
    else return false;
  }
  return (words.length > 1) ? false : true;

  function alphabetize(word) {
    if (!word) return;
    return word.split('').sort().join('');
  }
}

const word1 = "silent";
const word2 = "listen";
const word3 = "yes";
const word4 = "no";

console.log(checkAnagram(word3, word4));
