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

function rightSideView(root: TreeNode | null): number[] {
    const view: number[] = [];
    if (root) {
        let level: TreeNode[] = [root];
        while (level.length > 0) {
            view.push(level[level.length - 1].val);
            level = level.reduce<TreeNode[]>((nextLevel, node) => {
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
                return nextLevel;
            }, []);
        }
    }
    return view;
};