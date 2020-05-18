function isFullHouse(handArr) {
  let sorted = !handArr.some(isNaN) ? handArr.sort((a, b) => a - b) : handArr.sort();
  const split = [sorted.slice(0, 2), sorted.slice(2, 5)];
  return (new Set(split[0]).size === 1) && (new Set(split[1]).size === 1);
}


const hand = ["K", "K", "A", "K", "A"]; // true
// const hand = ["10", "10", "2", "10", "2"]; // true
// const hand = ["K", "K", "2", "K", "2"]; // true
// const hand = ["A", "J", "10", "3", "3"]; // false
// const hand = ["A", "J", "J", "J", "J"]; // false

console.log(isFullHouse(hand));
