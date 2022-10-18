class Solution:
    def countAndSay(self, n: int) -> str:
        state = "1"
        for _ in range(n - 1):
            state = "".join(str(len(list(j))) + str(i) for i, j in groupby(state))
        return state