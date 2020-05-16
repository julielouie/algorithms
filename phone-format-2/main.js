function formatPhone(phoneNums) {
  const map = ['none', 'none', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  const matchMap = match => {
    let num = 0;
    map.forEach((chars, index) => chars.includes(match) ? num = index : 0);
    return num;
  };
  return phoneNums.replace(/([A-Z])/g, matchMap);
}
