class Solution:
    def alternatingSubarray(self, nums: List[int]) -> int:
        res = j = 0
        
        for i in range(1, len(nums)):
            if nums[i] != nums[j] + (i - j) % 2:
                j = i - int(nums[i - 1] == nums[i] - 1)
            res = max(res, i - j + 1)
            
        return -1 if res == 1 else res