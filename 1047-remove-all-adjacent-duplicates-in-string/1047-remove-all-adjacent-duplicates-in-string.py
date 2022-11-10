class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        for symb in s:
            if stack and stack[-1] == symb:
                stack.pop()
            else:
                stack.append(symb)
        return ''.join(stack)