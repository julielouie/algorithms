const lengthOfLongestSubstring = function (string) {
  const visited = new Set();
  let left = 0;
  let right = 0;
  let resultLength = 0;

  while (right < string.length) {
    const currentChar = string.charAt(right);
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      resultLength = Math.max(resultLength, right - left + 1);
      right++;
    } else {
      visited.delete(string.charAt(left));
      left++;
    }
  }

  return resultLength;
};

const string1 = "abcabcbb";
  // 3 "abc"
const string2 = "bbbbb";
  // 1 "b"
const string3 = "pwwkew";
  // 3 "wke"
const string4 = "wekwwp";

console.log(lengthOfLongestSubstring(string1));
