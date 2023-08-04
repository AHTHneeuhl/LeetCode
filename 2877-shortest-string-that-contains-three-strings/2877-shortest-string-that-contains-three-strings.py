class Solution:
    def merge(self, x: str, y: str) -> str:
        if y in x:
            return x
        res = 0
        for i in range(1, min(len(x), len(y))):
            if x[-i:] == y[:i]:
                res = i
        return x + y[res:]


    def minimumString(self, a: str, b: str, c: str) -> str:
        res = (float('inf'), "")

        for p in permutations([a, b, c]):
            cur = ""
            for s in p:
                cur = self.merge(cur, s)
            res = min(res, (len(cur), cur))

        return res[1]