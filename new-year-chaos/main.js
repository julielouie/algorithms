function minimumbribeCount(q) {
  let count = 0;
  const bribeCount = {};
  for (let index = 0; index < q.length; index++) {
    if (q[index] > q[index + 1]) {
      if (bribeCount[q[index]] === undefined) {
        bribeCount[q[index]] = 0;
      }
      bribeCount[q[index]] += 1;
      let temp = q[index];
      q[index] = q[index + 1];
      q[index + 1] = temp;
      count++;
      index = 0;
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

const queue2 = [2, 1, 5, 3, 4];

console.log(minimumbribeCount(queue2));


//Hi Julie, I made a solution because I was curious. It's below. I don't know if it works on HR
//It works on your HTML tho and is theoretically fast.
//Don't look at my solution (i commented it out so it won't distract you in testing)
//Thanks.
// :)















//Øn

// function fasterMinimumBribeCount(q) {
//   let count = 0;
//   const bribeCount = {};
//   let again = false;
//   for (let index = 0; index < q.length; index++) {

//       if (q[index] > q[index + 1]) {
//         if (bribeCount[q[index]] === undefined) {
//           bribeCount[q[index]] = 0;
//         }
//         bribeCount[q[index]] += 1;
//         let temp = q[index];
//         q[index] = q[index + 1];
//         q[index + 1] = temp;
//         count++;
//         again = true;
//       }
//       if(index === q.length-2 && again === true) {
//         index = 0;
//         again = false;
//       }

//   }
//   const bribes = Object.values(bribeCount);
//   const chaos = bribes.filter(element => element > 2);
//   if (chaos.length === 0) {
//     return count;
//   } else {
//     return 'Too chaotic';
//   }
// }

// const fqueue = [2, 1, 5, 3, 4];
// const fqueue2 = [3, 2, 1, 5, 4, 6];

// console.log('fast:', fasterMinimumBribeCount(fqueue));
// console.log('fast2:', minimumbribeCount(fqueue2));
