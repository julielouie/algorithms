function minimumbribeCount(q) {
  let count = 0;
  const bribeCount = {};
  for (let index = 0; index < q.length; index++) {
    for (let innerIndex = 0; innerIndex < q.length; innerIndex++) {
      if (q[innerIndex] > q[innerIndex + 1]) {
        if (bribeCount[q[innerIndex]] === undefined) {
          bribeCount[q[innerIndex]] = 0;
        }
        bribeCount[q[innerIndex]] += 1;
        let temp = q[innerIndex];
        q[innerIndex] = q[innerIndex + 1];
        q[innerIndex + 1] = temp;
        count++;
      }
    }
  }
  const bribes = Object.values(bribeCount);
  const chaos = bribes.filter(element => element > 2);
  if (chaos.length === 0) {
    return count;
  } else {
    return 'Too chaotic';
  }
}

const queue = [2, 1, 5, 3, 4];

console.log(minimumbribeCount(queue));
