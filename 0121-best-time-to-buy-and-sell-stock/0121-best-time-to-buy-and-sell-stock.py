class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        minPrice = sys.maxsize

        for price in prices:
            minPrice = min(minPrice, price)
            profit = max(profit, price - minPrice)

        return profit