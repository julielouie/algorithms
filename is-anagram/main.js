function checkAnagram() {
  const words = [];
  args.forEach(word => {
    const sorted = alphabetize(word);
    if (!words[0]) words.push(sorted);
    if (words[0] === sorted) return;
  });
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

// console.log(checkAnagram(word1, word2));
