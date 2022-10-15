class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        @lru_cache(None)
        def dp(i, l, lc, k):
            if k < 0: return float('inf')
            if i >= n: return 0
            if s[i] == l:
                return dp(i+1, l, lc+1, k) + (lc in [1, 9, 99])
            else:
                return min(1 + dp(i+1, s[i], 1, k), dp(i+1, l, lc, k-1))
        
        n = len(s)
        return dp(0, "", 0, k)