class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        start = max_frequency = count = 0
        frequency_map = dict()
        
        for end in range(len(s)):
            frequency_map[s[end]] = frequency_map.get(s[end], 0) + 1
            
            max_frequency = max(max_frequency, frequency_map[s[end]])
            
            is_valid = (end + 1 - start - max_frequency <= k)
            if not is_valid:
                frequency_map[s[start]] -= 1
                start += 1
                
            count = end + 1 - start
            
        return count