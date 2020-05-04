function reverseString(str) {
  let reversed = '';
  (str.split('')).forEach(character => reversed = character + reversed);
  return reversed;
}
