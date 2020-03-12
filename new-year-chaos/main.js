function minimumbribeCount(q) {
  let bribes = 0;
  let minNumber = q.length;
  for (let index = q.length - 1; index >= 0; index--) {
    if (q[index] - index > 3) {
      return `Too chaotic`;
    }
    if (q[index] > index + 1) {
      bribes += (q[index] - (index + 1));
    } else {
      if (minNumber > q[index]) {
        minNumber = q[index];
      } else if (q[index] != minNumber) {
        bribes++;
      }
    }
  }

  return bribes;

  // let chaos = false;
  // let count = 0;
  // const bribeCount = {};
  // for (let index = 0; index < q.length; index++) {
  //   if (q[index] > q[index + 1]) {
  //     if (bribeCount[q[index]] === undefined) {
  //       bribeCount[q[index]] = 0;
  //     }
  //     bribeCount[q[index]] += 1;
  //     if (bribeCount[q[index]] > 2) {
  //       chaos = true;
  //     }
  //     let temp = q[index];
  //     q[index] = q[index + 1];
  //     q[index + 1] = temp;
  //     count++;
  //     index = -1;
  //   }
  // }
  // if (chaos) {
  //   count = 'Too chaotic';
  // }
  // return count;
}

const queue = [2, 5, 1, 3, 4]
const queue2 = [3, 2, 1, 4, 6, 5];

console.log(minimumbribeCount(queue2));
