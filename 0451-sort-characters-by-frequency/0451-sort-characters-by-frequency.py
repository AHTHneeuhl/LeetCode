class Solution:
    def frequencySort(self, s: str) -> str:
        return "".join([a * b for a, b in Counter(s).most_common()])