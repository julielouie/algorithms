function formatPhone(phoneNums) {
  const map = {
    ABC: 2,
    DEF: 3,
    GHI: 4,
    JKL: 5,
    MNO: 6,
    PQRS: 7,
    TUV: 8,
    WXYZ: 9
  }
  console.log(phoneNums)
  const matchMap = match => match = map[match];
  const newNums = phoneNums.replace(/([A-Z])/g, matchMap);
  console.log(newNums)

}

const nums = '800-YOU-RANG';
// const nums = '800-588-2300';
// const nums = '234-NOT-HERE';
// const nums = '751-LOL-8274';

console.log(formatPhone(nums));
