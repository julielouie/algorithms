const maxArea = function (height) {
  if (!height.length) return 0;
  let areas = [];
  for (let index = 0; index < height.length; index++) {
    calcArea(index);
  }
  areas = areas.sort((a, b) => a - b);
  if (areas.length) return areas[areas.length - 1];
  return 0;

  function calcArea(currentIndex) {
    let temp = 0;
    const currentLength = height[currentIndex];
    if (currentLength === 1) {
      areas.push(height.length - 1);
      return;
    }
    let areaIndex = 0;
    while (areaIndex < height.length) {
      if (areaIndex === currentIndex) {
        areaIndex++;
      }
      const otherLength = height[areaIndex];
      const length = Math.min(currentLength, otherLength);
      const width = Math.abs(areaIndex - currentIndex);
      const area = length * width;
      if (area && temp < area) {
        temp = area;
      }
      areaIndex++;
    }
    areas.push(temp);
  }
};
