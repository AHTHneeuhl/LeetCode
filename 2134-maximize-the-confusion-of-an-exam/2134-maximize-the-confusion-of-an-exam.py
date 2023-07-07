class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        max_size = 0
        count = Counter()

        for right in range(len(answerKey)):
            count[answerKey[right]] += 1
            minor = min(count['F'], count['T'])

            if minor <= k:
                max_size += 1
            else:
                count[answerKey[right - max_size]] -= 1

        return max_size