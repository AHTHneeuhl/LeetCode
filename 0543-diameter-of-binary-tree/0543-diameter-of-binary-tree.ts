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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        // Recursively calculate the heights of the left and right subtrees
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Update the diameter if the current path is longer
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the current node (including itself)
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    
    return diameter;
};