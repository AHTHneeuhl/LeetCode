class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        cnt, res = Counter(words), []
        heap = [(-freq, word) for word, freq in cnt.items()]
        heapq.heapify(heap)
            
        for _ in range(k):
            _, word = heappop(heap)
            res += [word]
            
        return res