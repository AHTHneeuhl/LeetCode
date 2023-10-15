class Solution:
    def lastVisitedIntegers(self, words: List[str]) -> List[int]:
        count, lst, res = 0, [], []

        for word in words:
            if (word == 'prev'):
                count += 1
                if count > len(lst):
                    res.append(-1)
                else:
                    res.append(lst[len(lst) - count])
            else:
                count = 0
                lst.append(int(word))

        return res