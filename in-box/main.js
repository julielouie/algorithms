function inBox(box) {
  for (let index = 1; index < box.length - 1; index++) {
    if (!box[index].includes('*')) {
      continue;
    } else {
      const starAt = box[index].indexOf('*');
      if (starAt !== 0 && starAt < box[index].length - 1) return true;
    }
  }
  return false;
}
