const longestPalindrome = function (string) {
  const palindromes = [];
  let index = 0;
  for (let innerIndex = index + 1; innerIndex < string.length; innerIndex++) {
    let first = string[index];
    if (first === string[innerIndex]) {
      let section = string.slice(index, innerIndex + 1);
      let reversed = section.split('').reverse().join('');
      if (section === reversed) palindromes.push(section);
    }
    if (innerIndex === string.length - 1 && index !== string.length - 1) {
      index++;
      innerIndex = index;
    } else if (innerIndex === string.length - 1 && !palindromes[0]) {
      palindromes.push(string[index]);
      index++;
      innerIndex = index;
    }
  }
  const longest = palindromes.reduce((a, b) => a.length >= b.length ? a : b, '');
  if (!palindromes[0]) return string[0];
  return longest;
};

const s1 = "babad";
  // "bab", "aba" also valid
const s2 = "cbbd";
  // "bb"

console.log(longestPalindrome("ccc"));
