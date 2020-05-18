function isFullHouse(handArr) {
  let sorted;
  const nums = !handArr.some(isNaN);
  if (nums) {
    sorted = handArr.sort((a, b) => a - b);
  } else {
    sorted = handArr.sort();
  }
  const split = [sorted.slice(0, 2), sorted.slice(2, 5)];
  const check1 = new Set(split[0]).size === 1;
  const check2 = new Set(split[1]).size === 1;
  if (check1 && check2) return true;
  return false;
}


// const hand = ["K", "K", "A", "K", "A"]; // true
const hand = ["10", "10", "2", "10", "2"]; // true
// const hand = ["K", "K", "2", "K", "2"]; // true
// const hand = ["A", "J", "10", "3", "3"]; // false

console.log(isFullHouse(hand));
