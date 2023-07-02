class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(combination, currSum, start):
            if currSum == target:
                result.append(combination[:])
                return
            if currSum > target:
                return

            for i in range(start, len(candidates)):
                combination.append(candidates[i])
                backtrack(combination, currSum + candidates[i], i)
                combination.pop()

        candidates.sort()
        result = []
        backtrack([], 0, 0)
        return result