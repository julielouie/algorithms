function maxProfit(prices: number[]): number {
  let profit = 0;
  let prevPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (prevPrice < currentPrice) {
      profit += currentPrice - prevPrice;
    }
    prevPrice = currentPrice;
  }

  return profit;
}
