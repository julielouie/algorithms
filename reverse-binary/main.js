function reversedBinaryInteger(num) {
  const bin = (num >>> 0).toString(2);
  const reversed = bin.split('').reverse().join('');
  return parseInt(reversed, 2);
}

// const num = 10; //5
// const num = 12; //3
// const num = 25; //19
const num = 45; //45

console.log(reversedBinaryInteger(num));
