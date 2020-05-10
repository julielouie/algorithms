function fizzBuzzFuzz(index) {
  for (let index = 1; index < 151; index++) {
    console.log(
      (index % 3 ? '' : 'Fizz') +
      (index % 5 ? '' : 'Buzz') +
      (index % 7 ? '' : 'Fuzz')
      || index
      );
  }
}
