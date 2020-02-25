function objectToArray(obj) {
  const objArray = [];
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let valueIndex = 0;
  keys.forEach(element => {
    objArray.push([element, values[valueIndex]]);
    valueIndex++;
  })
  return objArray;
}
