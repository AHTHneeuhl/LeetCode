class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        res, lookup = 0, set(nums)

        for num in lookup:
            if num - 1 not in lookup:
                curr = num
                curr_streak = 1
                
                while curr + 1 in lookup:
                    curr += 1
                    curr_streak += 1
                    
                res = max(res, curr_streak)
                
        return res