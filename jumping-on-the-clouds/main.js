function jumpingOnClouds(c) {
  let jumps = 0;
  for (let index = 0; index < c.length; index++) {
    if (c[index] === 1) {
      continue;
    } else if (index !== c.length - 1) {
      if (c[index] === c[index + 1] && c[index] === c[index + 2]) {
        jumps++;
        index++;
        continue;
      }
      jumps++;
    }
  }
  return jumps;
}

const cloudArray = [0, 0, 0, 1, 0, 0];

console.log(jumpingOnClouds(cloudArray));
