function minimumbribeCount(q) {
  let count = 0;
  const bribeCount = {};
  for (let index = 0; index < q.length; index++) {
    for (let innerIndex = 0; innerIndex < q.length; innerIndex++) {
      if (q[innerIndex] > q[innerIndex + 1]) {
        bribeCount[q[innerIndex]] += bribeCount[q[innerIndex]];
        let temp = q[innerIndex];
        q[innerIndex] = q[innerIndex + 1];
        q[innerIndex + 1] = temp;
        count++;
      }
    }
  }

}
