class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        n, k = len(nums), len(set(nums))
        res = i = 0
        count = Counter()

        for j in range(n):
            count[nums[j]] += 1
            while len(count) == k:
                count[nums[i]] -= 1
                if count[nums[i]] == 0:
                    del count[nums[i]]
                i += 1
            res += i
        
        return res