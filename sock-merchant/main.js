function sockMerchant(n, ar) {
  let pairCount = 0;
  for (let sockIndex = 0; sockIndex < ar.length; sockIndex++) {
    for (let secondSockInd = ar.length - 1; secondSockInd >= 0; secondSockInd--) {
      if (sockIndex === secondSockInd) {
        continue;
      } else if (ar[sockIndex] === ar[secondSockInd]) {
        ar.splice(secondSockInd, 1);
        pairCount++;
      }
    }
  }
  return pairCount;
}

const nEx = 9;
const sockEx = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(nEx, sockEx));
