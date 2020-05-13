function isPalindrome(str) {
  const condensed = str.toLowerCase().split(' ');
  const reversed = condensed.reverse().join('');
  if (reversed === condensed.join('')) return true;
  return false;
}
