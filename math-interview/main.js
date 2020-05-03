function calcNums(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
    case 'x':
      return num1 * num2;
    case '/':
      if (num2 === 0) return 'Cannot divide a number by 0!';
      return num1 / num2;
  }

}

const num1 = 2;
const num2 = 8;
const op = '+';
 // Output: 10

// const num1 = 20;
// const num2 = 5;
// const op = '-';
//  // Output: 15

// const num1 = 2;
// const num2 = 14;
// const op = '*';
//  // Output: 28

// const num1 = 36;
// const num2 = 6;
// const op = '/';
//  // Output: 6

// const num1 = 5;
// const num2 = 0;
// const op = '/';
 // Output: 'Cannot divide a number by 0!'
