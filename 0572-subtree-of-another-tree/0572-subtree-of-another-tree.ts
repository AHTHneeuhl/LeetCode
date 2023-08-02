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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (subRoot === null) return true;
    if (root === null) return false;
    
    if (isSameTree(root, subRoot)) return true;
        
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isSameTree = function(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    
    if (p !== null && q !== null && p.val === q.val)
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        
    else return false;
}