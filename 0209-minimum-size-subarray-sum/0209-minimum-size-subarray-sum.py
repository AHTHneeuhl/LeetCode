class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = right = 0
        res = float('inf')
        sumOfCurrWindow = 0

        for right in range(0, len(nums)):
            sumOfCurrWindow += nums[right]

            while sumOfCurrWindow >= target:
                res = min(res, right - left + 1)
                sumOfCurrWindow -= nums[left]
                left += 1
        
        return res if res != float('inf') else 0