class Solution:
    def maxProduct(self, s: str) -> int:
        n, res = len(s), 0
        
        first, last = [0] * (1 << n), [0] * (1 << n)
        
        for i in range(n):
            for j in range(1 << i, 1 << (i + 1)):
                first[j] = i

        for i in range(n):
            for j in range(1 << i, 1 << n, 1 << (i + 1)):
                last[j] = i
        
        @lru_cache(None)
        def dp(m):
            if m & (m - 1) == 0: return m != 0
            l, f = last[m], first[m]
            lb, fb = 1 << l, 1 << f
            return max(dp(m - lb), dp(m - fb), dp(m - lb - fb) + (s[l] == s[f]) * 2)

        for m in range(1, 1 << n):
            res = max(res, dp(m) * dp((1 << n) - 1 - m))
            
        return res
