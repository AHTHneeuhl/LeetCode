class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)

        items = sorted(count.items(), key = lambda item: -item[1])

        return [x for x, _ in items[:k]]