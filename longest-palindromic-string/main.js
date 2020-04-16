const longestPalindrome = function (string) {
  const palindromes = [];
  for (let index = 0; index < string.length; index++) {
    let firstIndex = string[index];
    for (let innerIndex = 0; innerIndex < string.length; innerIndex++) {
      if (firstIndex === string[innerIndex] && index !== innerIndex) {
        let section = string.slice(index, innerIndex);
        let reversed = section.split('').reverse().join('');
        if (section === reversed) palindromes.push(section);
      }
    }
  }
};

const s1 = "babad";
  // "bab", "aba" also valid
const s2 = "cbbd";
  // "bb"

// console.log(longestPalindrome(s1));
