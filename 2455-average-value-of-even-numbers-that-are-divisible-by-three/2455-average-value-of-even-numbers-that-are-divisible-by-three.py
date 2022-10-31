class Solution:
    def averageValue(self, nums: List[int]) -> int:
        lst = []
        for num in nums:
            if num % 2 == 0 and num % 3 == 0:
                lst.append(num)
        return sum(lst) // len(lst) if lst else 0