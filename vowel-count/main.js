function countVowels(str) {
  let count = 0;
  str.toLowerCase().split('').forEach(letter => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') count++;
  });
  return count;
}
