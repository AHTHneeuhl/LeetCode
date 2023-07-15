class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        n, MOD = len(nums), 10 ** 9 + 7
        
        nums.sort()
        
        res = 0
        left, right = 0, n - 1
        
        while left <= right:
            if nums[left] + nums[right] <= target:
                res = (res + pow(2, right - left, MOD)) % MOD
                left += 1
            else:
                right -= 1
                
        return res