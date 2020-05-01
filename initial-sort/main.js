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
