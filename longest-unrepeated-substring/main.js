const lengthOfLongestSubstring = function (string) {
  const strSet = string.split('');
  //strSet = [...new Set(string)];
  console.log(strSet)
  return strSet.length;
};

const string1 = "abcabcbb";
  // 3 "abc"
const string2 = "bbbbb";
  // 1 "b"
const string3 = "pwwkew";
  // 3 "wke"

console.log(lengthOfLongestSubstring(string1));
