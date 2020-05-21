function removeFlys(str) {
  const regex = RegExp(/([fly])\w*/g);
  const matchChar = match => {
    if (match === 'f' || match === 'l' || match === 'y') return '';
  };
  if (regex.test(str)) {
    return str.replace(regex, matchChar);
  }
}

const str = "flyflyfflllgoflyyyyflynefffff"; // 'gone'
// const str = 'dragonfly'; // 'dragon'
// const str = 'stupefy'; // 'stupe'
// const str = 'remove'; // 'No flies here!'

console.log(removeFlys(str));
