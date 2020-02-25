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

const letters = { D: 1, B: 2, C: 3 };
const words = { likes: 2, dislikes: 3, followers: 10 };

console.log(objectToArray(words));
