const longestPalindrome = function (string) {
  const palindromes = [];
  let index = 0;
  for (let innerIndex = index + 1; innerIndex < string.length; innerIndex++) {
    let first = string[index];
    if (first === string[innerIndex]) {
      let section = string.slice(index, innerIndex + 1);
      let reversed = section.split('').reverse().join('');
      if (section === reversed) palindromes.push(section);
      index++;
      innerIndex = index;
    }
    if (innerIndex === string.length - 1 && !palindromes[0]) {
      index++;
      innerIndex = index;
    }
  }
  const longest = palindromes.reduce((a, b) => a.length >= b.length ? a : b, '');
  return longest;
};

const s1 = "babad";
  // "bab", "aba" also valid
const s2 = "cbbd";
  // "bb"

console.log(longestPalindrome(s1));
