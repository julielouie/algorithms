function removeFlys(str) {
  const regex = RegExp(/([fly])\w*/g);
  if (regex.test(str)) {
    str.replace(regex, '');
  }
  return str;
}

const str = "flyflyfflllgoflyyyyflynefffff"; // 'gone'
// const str = 'dragonfly'; // 'dragon'
// const str = 'stupefy'; // 'stupe'
// const str = 'remove'; // 'No flies here!'

console.log(removeFlys(str));
