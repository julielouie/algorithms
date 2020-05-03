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
