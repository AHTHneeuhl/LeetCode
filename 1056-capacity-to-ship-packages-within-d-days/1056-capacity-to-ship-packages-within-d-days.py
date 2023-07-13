class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l, r = max(weights), sum(weights)

        while l <= r:
            m = (l + r) // 2

            if self.feasible(weights, m, days):
                r = m - 1;
            else:
                l = m + 1;

        return l


    def feasible(self, weights: List[int], c: int, days: int) -> bool:
        days_needed, current_load = 1, 0

        for weight in weights:
            current_load += weight
            if current_load > c:
                days_needed += 1
                current_load = weight

        return days_needed <= days