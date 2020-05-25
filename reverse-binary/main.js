function reversedBinaryInteger(num) {
  const bin = (num >>> 0).toString(2);
  const reversed = bin.split('').reverse().join('');
  return parseInt(reversed, 2);
}
