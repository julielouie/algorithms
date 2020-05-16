function formatPhone(phoneNums) {
  const map = ['none', 'none', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  const matchMap = match => {
    let num = 0;
    map.forEach((chars, index) => chars.includes(match) ? num = index : 0);
    return num;
  };
  return phoneNums.replace(/([A-Z])/g, matchMap);
}

const nums = '800-YOU-RANG';
// const nums = '800-588-2300';
// const nums = '234-NOT-HERE';
// const nums = '751-LOL-8274';

console.log(formatPhone(nums));
