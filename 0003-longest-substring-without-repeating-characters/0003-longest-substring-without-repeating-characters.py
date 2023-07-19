class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        count, t = 0, ""
        
        for ch in s:
            if ch in t:
                t = t[t.index(ch) + 1:]
            t += ch
            count = max(count, len(t))
            
        return count