class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        heap = []

        for i in range(len(dist)):
            heap.append(dist[i] / speed[i])

        heapq.heapify(heap)
        res = 0

        while heap:
            if heapq.heappop(heap) <= res:
                break
            
            res += 1

        return res