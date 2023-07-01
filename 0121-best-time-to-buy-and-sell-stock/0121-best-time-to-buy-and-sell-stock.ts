function maxProfit(prices: number[]): number {
    var profit = 0;
    var price = 10 ** 7;
    for (let i = 0; i < prices.length; i++) {
        price = Math.min(price, prices[i]);
        profit = Math.max(profit, prices[i] - price);
    }
    return profit;
};