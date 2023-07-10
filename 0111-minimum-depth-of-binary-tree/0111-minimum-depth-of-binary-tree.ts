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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
  
    const queue: [TreeNode, number][] = [[root, 1]];
    
    while (queue.length > 0) {
        const [node, level] = queue.shift()!;
        
        if (node) {
            if (!node.left && !node.right) {
                return level;
            } else {
                if (node.left) {
                    queue.push([node.left, level + 1]);
                }
                if (node.right) {
                    queue.push([node.right, level + 1]);
                }
            }
        }
    }
    
    return 0;
};