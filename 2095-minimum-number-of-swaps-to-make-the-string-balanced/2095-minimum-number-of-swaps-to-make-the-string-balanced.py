class Solution:
    def minSwaps(self, s: str) -> int:
        curr, res = 0, 0

        for ch in s:
            if ch == ']':
                curr += 1
            else:
                curr -= 1
            res = max(res, curr)

        return (res + 1) // 2