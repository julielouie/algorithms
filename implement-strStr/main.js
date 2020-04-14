const strStr = function (haystack, needle) {
  if (!needle) return 0;

  const needleLen = needle.length;
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] === needle[0]) {
      let needleStr = haystack.slice(index, index + needleLen);
      if (needle === needleStr) return index;
    }
  }

  return -1;
};
