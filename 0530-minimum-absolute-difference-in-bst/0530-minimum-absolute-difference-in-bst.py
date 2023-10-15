# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        def fn(node, l, r):
            if not node: return r - l
            left = fn(node.left, l, node.val)
            right = fn(node.right, node.val, r)
            return min(left, right)
            
        return fn(root, float('-inf'), float('inf'))