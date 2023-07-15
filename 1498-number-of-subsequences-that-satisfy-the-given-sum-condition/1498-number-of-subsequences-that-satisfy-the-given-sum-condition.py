class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        n, MOD = len(nums), 10 ** 9 + 7
        
        nums.sort()
        
        res = 0
        
        for left in range(n):
            right = bisect.bisect_right(nums, target - nums[left]) - 1
            
            if right >= left:
                res += pow(2, right - left, MOD)
                
        return res % MOD