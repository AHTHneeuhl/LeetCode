function maxProfit(prices: number[]): number {
    let profit = 0;
    let minPrice = Infinity;

    for (const currentPrice of prices) {
        minPrice = Math.min(minPrice, currentPrice);
        profit = Math.max(profit, currentPrice - minPrice);
    }

    return profit;
};