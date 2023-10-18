# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return (0, 0)

            left_robbed, left_not_robbed = dfs(node.left)
            right_robbed, right_not_robbed = dfs(node.right)

            # If the current node is robbed, its children cannot be robbed
            robbed = node.val + left_not_robbed + right_not_robbed

            # If the current node is not robbed, we can choose to either rob or not rob its children
            not_robbed = max(left_robbed, left_not_robbed) + max(right_robbed, right_not_robbed)

            return (robbed, not_robbed)

        robbed, not_robbed = dfs(root)
        # The result is the maximum of the two possibilities
        return max(robbed, not_robbed)