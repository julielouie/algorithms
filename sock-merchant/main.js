function sockMerchant(n, ar) {
  const sortedSocks = ar.sort((a, b) => a - b);
  let pairCount = 0;
  for (let sockIndex = 0; sockIndex < n; sockIndex++) {
    if (sortedSocks[sockIndex] === sortedSocks[sockIndex + 1]) {
      pairCount++;
      sockIndex++;
    }
  }
  return pairCount;
}

const nEx = 9;
const sockEx = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(nEx, sockEx));
