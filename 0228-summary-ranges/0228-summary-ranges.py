class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        i, result, n = 0, [], len(nums)
        
        while i < n:
            beg = end = i
            while end < n - 1 and nums[end] + 1 == nums[end + 1]: end += 1
            result.append(str(nums[beg]) + ("->" + str(nums[end])) *(beg != end))     
            i = end + 1
        
        return result