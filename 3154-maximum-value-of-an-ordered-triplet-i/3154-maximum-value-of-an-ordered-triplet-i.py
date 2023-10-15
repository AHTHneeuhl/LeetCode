class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res = maxa = maxab = 0
        
        for num in nums:
            res = max(res, maxab * num)
            maxab = max(maxab, maxa - num)
            maxa = max(maxa, num)

        return res