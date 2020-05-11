function buildPyramid(X) {
  if (X < 1) return 'Please enter a positive number!';

  const baseCharCount = 2 * (X - 1) + 1;
  buildPyramid(X - 1);

  const spCount = baseCharCount - (baseCharCount - 2);
  console.log(spCount)

  console.log('#'.repeat(baseCharCount));
}

// const num = 2;
const num = 5;
// const num = 10;

console.log(buildPyramid(num));
