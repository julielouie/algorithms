function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';

  let char = 1
  let spaces = X;

  for (let index = 0; spaces > 0; index++) {
    console.log(' '.repeat(spaces), '#'.repeat(char))
    char += 2;
    spaces -= 1;
  }
}
