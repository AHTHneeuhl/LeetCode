class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        count = dict()
        
        for width, height in rectangles:
            count[width / height] = 1 + count.get(width / height, 0)

        res = 0

        for value in count.values():
            if value > 1:
                res += (value * (value - 1)) // 2

        return res