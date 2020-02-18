const fizzBuzz = function (n) {
  const num = n + 1;
  for (let index = 1; index < num; index++) {
    if (index % 15) {
      console.log('FizzBuzz');
    } else if (index % 3) {
      console.log('Fizz');
    } else if (index % 5) {
      console.log('Buzz');
    } else {
      console.log(index);
    }
  }
};

fizzBuzz(15);
