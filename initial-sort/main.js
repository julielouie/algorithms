function sortInitials(initials) {
  initials = initials.toLowerCase();
  const map = {};
  let newName = '';
  for (let index = 0; index < initials.length; index++) {
    if (!map.hasOwnProperty(initials[index])) {
      map[initials[index]] = initials.charCodeAt(index);
    }
  }
  while (Object.keys(map).length !== 0) {
    let temp = Object.keys(map)[0];
    for (let key in map) {
      if (map[key] < map[temp]) {
        temp = key;
      }
    }
    newName += temp.toUpperCase();
    delete map[temp];
  }
  return newName;
}

const initials1 = 'ibhsdj';
 //Output: 'BDHIJS'

const initials2 = 'posh';
 //Output: 'HOPS'

const initials3 = 'aCbDfE'

console.log(sortInitials(initials3));
