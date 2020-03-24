function firstDuplicate(a) {
  let indices = {};
  for (let index = 0; index < a.length; index++) {
    if (indices.hasOwnProperty([a[index]])) {
      return a[index];
    } else {
      indices[a[index]] = a[index];
    }
  }
  return -1;
}

const a = [2, 1, 3, 5, 3, 2];

console.log(firstDuplicate(a));
