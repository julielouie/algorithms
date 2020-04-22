const addBinary = function (bin1, bin2) {
  const num1 = parseInt(bin1, 2);
  const num2 = parseInt(bin2, 2);
  let result = num1 + num2;
  result = (result >>> 0).toString(2);
  return result;
};

const in1 = '11';
const in2 = '1';

const in3 = '1010';
const in4 = '1011';

console.log(addBinary(in3, in4));
