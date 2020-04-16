const lengthOfLongestSubstring = function (string) {
  const visited = new Set();
  let left = 0;
  let right = 0;
  let resultLength = 0;

  while (right < string.length) {
    const currentChar = string[right];
    if (!visited.has(currentChar)) {
      visited.add(currentChar);
      resultLength = Math.max(resultLength, right - left + 1);
      right++;
    } else {
      visited.delete(string[left]);
      left++;
    }
  }

  return resultLength;
};
