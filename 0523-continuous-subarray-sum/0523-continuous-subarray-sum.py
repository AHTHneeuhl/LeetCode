class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder, total = {0: -1}, 0

        for i, num in enumerate(nums):
            total += num
            r = total % k
            if r not in remainder:
                remainder[r] = i
            elif i - remainder[r] > 1:
                return True

        return False