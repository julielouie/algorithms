function sockMerchant(n, ar) {
  let pairCount = 0;
  debugger;
  for (let sockIndex = 0; sockIndex < n; sockIndex++) {
    for (let secondSockInd = 0; secondSockInd < ar.length; secondSockInd++) {
      if (sockIndex === secondSockInd) {
        continue;
      } else if (ar[sockIndex] === ar[secondSockInd]) {
        pairCount++;
      }
    }
  }
  return pairCount;
}

const nEx = 9;
const sockEx = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(nEx, sockEx));
