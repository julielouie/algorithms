function getFrame(w, h, ch) {
  if (w <= 2 || h <= 2) {
    return 'invalid';
  }

  const frame = [];
  let borderWidth = '';
  let innerWidth = '';
  let borderIndex = 0, innerIndex = 0;

  while (borderIndex < w) {
    borderWidth += `${ch}`;
    borderIndex++;
  }

  while (innerIndex < w) {
    if (innerWidth.length === w - 1) {
      innerWidth += `${ch}`;
      innerIndex++;
    } else if (innerWidth[0] === `${ch}`) {
      innerWidth += ' ';
      innerIndex++;
    } else {
      innerWidth += `${ch}`;
      innerIndex++;
    }
  }

  for (let index = 0; index < h; index++) {
    const lastIndex = frame.length;
    if (!lastIndex || lastIndex + 1 === h) {
      frame.push([borderWidth]);
    } else if (lastIndex < h) {
      frame.push([innerWidth]);
    }
  }

  return frame;
}
