class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        d = defaultdict(list)
        for i, sm in enumerate([0] + list(accumulate(nums))):
            d[sm % k] += [i]
            
        for val in d:
            if d[val][-1] - d[val][0] >= 2: return True
        return False