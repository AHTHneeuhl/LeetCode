class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        count = 0
        curr = sum(arr[:k-1])

        for i in range(len(arr) - k + 1):
            curr += arr[i + k - 1]
            if curr / k >= threshold:
                count += 1
            curr -= arr[i]
        
        return count