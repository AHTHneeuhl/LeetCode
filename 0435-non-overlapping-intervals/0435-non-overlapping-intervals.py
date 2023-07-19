class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[1])
        count, k = 0, -inf

        for x, y, in intervals:
            if x >= k:
                k = y
            else:
                count += 1

        return count