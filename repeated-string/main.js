function repeatedString(s, n) {
  let index = 0;
  let count = 0;
  while (s.length !== n) {
    s += s[index];
    index++;
    if (index === 3) {
      index = 0;
    }
  }
  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'a') {
      count++;
    }
  }
  return count;
}

const str = 'aba';
const length = 10;

console.log(repeatedString(str, length));
