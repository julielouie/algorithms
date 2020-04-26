const maxArea = function (height) {
  if (!height[0]) return 0;
  let areas = [];
  for (let index = 0; index < height.length; index++) {
    calcArea(index);
  }


  function calcArea(currentIndex) {
    const currentLength = height[currentIndex];
    let areaIndex = 0;
    while (areaIndex < height.length) {
      const otherLength = height[areaIndex];
      const length = Math.min(currentLength, otherLength);
      const width = Math.abs(areaIndex - currentIndex);
      if (length && width) {
        areas.push(length * width);
      }
      areaIndex++;
    }
  }
};

const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  // output: 49

// console.log(maxArea(test1));



/* - if height is empty, return 0
   - loop through to calculate area of each index w/resp to one index
   - in each iteration, calculate a = l x w
   - push each value to an array
   - sort this array
   - return 0 if empty, else return largest value
*/
