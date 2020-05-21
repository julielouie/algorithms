function removeFlys(str) {
  const regex = RegExp(/[fly]+/g);
  if (regex.test(str)) {
    return str.replace(regex, '');
  }
  return 'No flies here!';
}

const str = "flyflyfflllgoflyyyyflynefffff"; // 'gone'
// const str = 'dragonfly'; // 'dragon'
// const str = 'stupefy'; // 'stupe'
// const str = 'remove'; // 'No flies here!'

console.log(removeFlys(str));
