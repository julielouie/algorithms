const longestPalindrome = function (string) {
  let longest = '';
  for (let index = 0; index < string.length; index++) {
    for (let innerIndex = 0; innerIndex < 2; innerIndex++) {
      let left = index;
      let right = index + innerIndex;

      while (left >= 0 && string[left] === string[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > longest.length) {
        longest = string.substring(left + 1, right);
      }
    }

    if (Math.ceil(longest.length / 2) >= string.length - index) break;
  }
  return longest;
};

const s1 = "babad";
  // "bab", "aba" also valid
const s2 = "cbbd";
  // "bb"

console.log(longestPalindrome(s2));
