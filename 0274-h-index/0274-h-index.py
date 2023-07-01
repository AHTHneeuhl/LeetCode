class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        buckets = [0] * (n + 1)
        
        for elem in citations:
            buckets[min(elem, n)] += 1
        
        accum = list(accumulate(buckets[1:][::-1]))[::-1]  
        compar = [accum[i] >= i + 1 for i in range(n)]  
        return (compar + [0]).index(0)   