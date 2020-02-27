function jumpingOnClouds(c) {
  let jumps = 0;
  for (let index = 0; index < c.length; index++) {
    if (c[index] === 1) {
      continue;
    } else if (index !== c.length - 1) {
      jumps++;
    }
  }
  return jumps;
}

const cloudArray = [0, 0, 1, 0, 0, 1, 0];

console.log(jumpingOnClouds(cloudArray));
