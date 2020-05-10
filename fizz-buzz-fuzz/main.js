function fizzBuzzFuzz(index) {
  for (let index = 1; index < 151; index++) {
    if (index % 105 === 0) {
      console.log('FizzBuzzFuzz');
    } else if (index % 35 === 0) {
      console.log('BuzzFuzz');
    } else if (index % 21 === 0) {
      console.log('FizzFuzz');
    } else if (index % 7 === 0) {
      console.log('Fuzz');
    } else if (index % 5 === 0) {
      console.log('Buzz');
    } else if (index % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(index);
    }
  }
}

console.log(fizzBuzzFuzz(num));
