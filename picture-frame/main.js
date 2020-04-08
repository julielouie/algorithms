function getFrame(w, h, ch) {
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

  const lastIndex = frame.length - 1;
  if (!lastIndex) {
    frame.push([ ])
  }
}

// console.log(getFrame(4, 5, "#"));
  // [
  //   ["####"],
  //   ["#  #"],
  //   ["#  #"],
  //   ["#  #"],
  //   ["####"]
  // ]
  // Frame is 4 characters wide and 5 characters tall.

//console.log(getFrame(10, 3, "*"));
  // [
  //   ["**********"],
  //   ["*        *"],
  //   ["**********"]
  // ]
  // Frame is 10 characters and wide and 3 characters tall.

//console.log(getFrame(2, 5, "0"));
  // "invalid"
  // Frame"s width is not more than 2.
