function isJackpot(slotArr) {
  return slotArr.every(slotItem => slotItem === slotArr[0]);
}


// const items = ["@", "@", "@", "@"];
// const items = ["!", "!", "!", "!"];
// const items = ["*", "*", "*", "*"];
// const items = ["/", "/", "@", "@"];
const items = ["*", "*", "*", "@"];

console.log(isJackpot(items));
