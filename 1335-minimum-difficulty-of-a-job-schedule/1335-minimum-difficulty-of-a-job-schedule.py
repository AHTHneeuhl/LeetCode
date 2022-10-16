class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        @lru_cache(None)
        def dp(i, k):
            if i == k: return sum(jobDifficulty[:i])
            if i < k or k == 0: return float("inf") 
            T, ans = -float("inf"), float("inf")

            for j in range(i-1, k-2, -1):
                T = max(T, jobDifficulty[j])
                ans = min(ans, dp(j, k-1) + T)
            return ans
        
        return ans if (ans := dp(len(jobDifficulty), d)) != float("inf") else -1