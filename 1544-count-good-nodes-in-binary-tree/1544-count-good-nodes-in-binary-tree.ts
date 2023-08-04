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

function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;

    function dfs(node: TreeNode | null, maxSoFar: number): number {
        if (!node) return 0;

        let goodNodesCount = 0;

        if (node.val >= maxSoFar) {
            goodNodesCount += 1;
            maxSoFar = node.val;
        }

        goodNodesCount += dfs(node.left, maxSoFar);
        goodNodesCount += dfs(node.right, maxSoFar);

        return goodNodesCount;
    }

    return dfs(root, root.val);
};