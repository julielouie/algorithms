const addBinary = function (bin1, bin2) {
  const num1 = `0b${bin1}`;
  const num2 = `0b${bin2}`;
  const result = BigInt(num1) + BigInt(num2);
  return result.toString(2);
};
