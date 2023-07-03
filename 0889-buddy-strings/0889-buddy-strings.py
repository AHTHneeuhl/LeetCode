class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal): return False

        if s == goal:
            freq = [0] * 26
            
            for ch in s:
                freq[ord(ch) - ord('a')] += 1
                if freq[ord(ch) - ord('a')] == 2:
                    return True

            return False

        fIdx = -1
        sIdx = -1

        for i in range(len(s)):
            if s[i] != goal[i]:
                if fIdx == -1:
                    fIdx = i
                elif sIdx == -1:
                    sIdx = i
                else:
                    return False

        if sIdx == -1:
            return False

        return s[fIdx] == goal[sIdx] and s[sIdx] == goal[fIdx]