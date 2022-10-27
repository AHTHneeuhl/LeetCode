class Solution:
    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
        dim = len(img1)

        def non_zero_cells(M):
            ret = []
            for x in range(dim):
                for y in range(dim):
                    if M[x][y] == 1:
                        ret.append((x, y))
            return ret

        transformation_count = defaultdict(int)
        max_overlaps = 0

        A_ones = non_zero_cells(img1)
        B_ones = non_zero_cells(img2)

        for (x_a, y_a) in A_ones:
            for (x_b, y_b) in B_ones:
                vec = (x_b - x_a, y_b - y_a)
                transformation_count[vec] += 1
                max_overlaps = max(max_overlaps, transformation_count[vec])

        return max_overlaps