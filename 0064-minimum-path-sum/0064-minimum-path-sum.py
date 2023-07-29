class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        @lru_cache(None)
        def cal(x, y):
            cands = []
            if y > 0: cands.append(cal(x, y - 1))
            if x > 0: cands.append(cal(x - 1, y))
            return min(cands or [0]) + grid[x][y]
        
        return cal(len(grid) - 1, len(grid[0]) - 1)