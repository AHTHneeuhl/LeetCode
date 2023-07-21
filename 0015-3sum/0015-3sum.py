class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result, n = set(), len(nums)

        # Sort the array in ascending order
        nums.sort()

        for i in range(n - 2):
            # Skip duplicates for the first number in the triplet
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left = i + 1
            right = n - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total == 0:
                    # A triplet that sums to 0 is found, add it to the result set
                    result.add((nums[i], nums[left], nums[right]))
                    # Skip duplicates for the second and third numbers in the triplet
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
                elif total < 0:
                    # The current sum is too small, move left pointer to increase the sum
                    left += 1
                else:
                    # The current sum is too large, move right pointer to decrease the sum
                    right -= 1

        # Convert the set to a list of lists and return the result
        return list(result)