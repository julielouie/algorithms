function isPalindrome(str) {
  const condensed = str.toLowerCase().split(' ');
  const reversed = condensed.reverse().join('');
  if (reversed === condensed.join('')) return true;
  return false;
}

const str = 'noon';
// const str = 'Mom';
// const str = 'Kayak';
// const str = 'racecaR';
// const str = 'Was it a cat I saw';

console.log(isPalindrome(str));
