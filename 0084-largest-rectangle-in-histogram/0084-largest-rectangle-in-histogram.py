class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        maxArea, n = 0, len(heights)

        for i in range(n):
            while stack and heights[i] < heights[stack[-1]]:
                height = heights[stack.pop()]
                width = i if not stack else i - stack[-1] - 1
                maxArea = max(maxArea, height * width)

            stack.append(i)

        while stack:
            height = heights[stack.pop()]
            width = n if not stack else n - stack[-1] - 1
            maxArea = max(maxArea, height * width)

        return maxArea