class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)

        # Step 1: Ignore negative numbers and zeros
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = n + 1

        # Step 2: Place positive numbers at their correct indices
        for i in range(n):
            num = abs(nums[i])
            if num <= n:
                nums[num - 1] = -abs(nums[num - 1])

        # Step 3: Find the first index that doesn't contain the correct number
        for i in range(n):
            if nums[i] > 0:
                return i + 1

        # Step 4: No missing positive integer found, return n + 1
        return n + 1