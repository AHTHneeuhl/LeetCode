class Solution:
    def minimumMountainRemovals(self, nums: List[int]) -> int:
        def f(x):
            res, lst = [], []
            for i in x:
                cur = bisect_left(lst, i)
                res.append(cur)
                if cur == len(lst):
                    lst.append(i)
                else:
                    lst[cur] = i
            return res

        left, right = f(nums), f(nums[::-1])[::-1]
        ans = 0
        for i in range(len(nums)):
            if left[i] and right[i]:
                ans = max(ans, left[i] + right[i] + 1)
        return len(nums) - ans