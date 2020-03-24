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
