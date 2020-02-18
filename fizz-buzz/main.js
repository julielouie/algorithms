const fizzBuzz = function (n) {
  const num = n + 1;
  let result = [];
  for (let index = 1; index < num; index++) {
    if (index % 15 === 0) {
      result.push('FizzBuzz');
    } else if (index % 3 === 0) {
      result.push('Fizz');
    } else if (index % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(`${index}`);
    }
  }
  return result;
}
