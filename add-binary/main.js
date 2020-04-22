const addBinary = function (bin1, bin2) {
  const num1 = `0b${bin1}`;
  const num2 = `0b${bin2}`;
  const result = BigInt(num1) + BigInt(num2);
  return result.toString(2);
};

const in1 = '11';
const in2 = '1';

const in3 = '1010';
const in4 = '1011';

const in5 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const in6 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(in5, in6));
