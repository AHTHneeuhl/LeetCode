class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        return self.countVowels(s[:len(s)//2]) == self.countVowels(s[len(s)//2:])
        
    def countVowels(self, s: str) -> int:
        count = 0
        for ch in s:
            if ch in ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']:
                count += 1
        return count
        