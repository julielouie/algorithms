const addTwoNumbers = function (l1, l2) {
  const link1 = parseInt(l1.reverse().join(''));
  const link2 = parseInt(l2.reverse().join(''));
  const resLink = link1 + link2 + '';
  return resLink.split('');
};
