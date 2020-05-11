function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';

  let char = 1
  let spaces = X;

  for (let index = 0; spaces > 0; index++) {
    console.log(" ".repeat(spaces), "#".repeat(char))
    char += 2
    spaces -= 1
  }

  // const baseCharCount = 2 * (X - 1) + 1;
  // buildPyramid(X - 1);

  // const spCount = baseCharCount - (baseCharCount - 2);
  // console.log(spCount)

  // console.log('#'.repeat(baseCharCount));
}

// const num = 2;
const num = 5;
// const num = 10;

console.log(buildPyramid(num));
