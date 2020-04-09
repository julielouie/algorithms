const longestCommonPrefix = function (strArray) {
  if (!strArray[0]) return '';

  for (let prefixIndex = 0; prefixIndex < strArray[0].length; prefixIndex++) {
    for (let string of strArray) {
      if (string[prefixIndex] !== strArray[0][prefixIndex]) {
        return string.slice(0, prefixIndex);
      }
    }
  }

  return strArray[0];
};
