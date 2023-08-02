/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null): [boolean, number] => {
      if (!root) {
        return [true, 0];
      }
      const [leftBalanced, leftHeight] = dfs(root.left);
      const [rightBalanced, rightHeight] = dfs(root.right);
      const balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

      return [balanced, 1 + Math.max(leftHeight, rightHeight)];
    };

    return dfs(root)[0];
};