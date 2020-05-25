function reversedBinaryInteger(num) {
  const bin = (num >>> 0).toString(2);
  const reversed = bin.split('').reverse().join('');
  console.log(parseInt(reversed, 2));
}

const num = 10; //5
// const num = 12; //3
// const num = 25; //19
// const num = 45; //45

// 10 = 1010 -> 0101 = 5
// 12 = 1100 -> 0011 = 3
// 25 = 11001 -> 10011 = 19
// 45 = 101101 -> 101101 = 45

console.log(reversedBinaryInteger(num));
