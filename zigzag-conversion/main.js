const convert = function (str, numRows) {
  const result = Array(numRows).fill('');
  let row = 0;
  let zigzag = true;
  for (let index = 0; index < str.length; index++) {
      result[row] += str[index];
      zigzag ? row++ : row--;
    if (row === numRows - 1 || row === 0) {
      zigzag = !zigzag;
    }
  }
  return result.join('');
};

const s1 = "PAYPALISHIRING";
const numRows1 = 3;

const s2 = "PAYPALISHIRING";
const numRows2 = 4;

console.log(convert(s2, numRows2));
