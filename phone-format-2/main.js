function formatPhone(phoneNums) {
  const map = ['none', 'none', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
  // const map = {
  //   ABC: 2,
  //   DEF: 3,
  //   GHI: 4,
  //   JKL: 5,
  //   MNO: 6,
  //   PQRS: 7,
  //   TUV: 8,
  //   WXYZ: 9
  // }

  const matchMap = match => {
    let num = 0;
    map.forEach((chars, index) => chars.includes(match) ? num = index : 0);
    return num;
  };
  const newNums = phoneNums.replace(/([A-Z])/g, matchMap);
  console.log(newNums)

}

const nums = '800-YOU-RANG';
// const nums = '800-588-2300';
// const nums = '234-NOT-HERE';
// const nums = '751-LOL-8274';

console.log(formatPhone(nums));
