class Solution:
    def checkRecord(self, s: str) -> bool:
        return "LLL" not in s and sum([i == "A" for i in s]) <= 1