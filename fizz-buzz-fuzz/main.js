function fizzBuzzFuzz(num) {
  for (let index = 1; index < 151; index++) {
    if (num % 105 === 0) {
      return 'FizzBuzzFuzz';
    } else if (num % 35 === 0) {
      return 'BuzzFuzz';
    } else if (num % 21 === 0) {
      return 'FizzFuzz';
    } else if (num % 7 === 0) {
      return 'Fuzz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else {
      return num;
    }
  }
}

const num = 3;
// const num = 5;
// const num = 7;
// const num = 21;
// const num = 35;
// const num = 105;

console.log(fizzBuzzFuzz(num));
