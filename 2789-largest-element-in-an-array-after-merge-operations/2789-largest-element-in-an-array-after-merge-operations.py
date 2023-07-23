class Solution:
    def maxArrayValue(self, nums: List[int]) -> int:
        n = len(nums)
        result = total = nums[n - 1]

        for i in range(n - 2, -1, -1):
            if nums[i] <= total:
                total += nums[i]
            else:
                total = nums[i]

            result = max(result, total)

        return result