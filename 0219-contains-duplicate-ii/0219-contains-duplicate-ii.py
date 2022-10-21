class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        look = dict()
        for i, n in enumerate(nums):
            if n in look and (i - look[n] <= k):
                return True
            look[n] = i
        return False