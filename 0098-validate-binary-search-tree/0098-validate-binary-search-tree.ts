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

function isValidBST(root: TreeNode | null): boolean {
    return validate(root, -Infinity, Infinity);
};

const validate = (root: TreeNode | null, left: number, right: number): boolean => {
    if (!root) return true;
    if (root.val >= right || root.val <= left) return false;
    return validate(root.left, left, root.val) && validate(root.right, root.val, right);
};