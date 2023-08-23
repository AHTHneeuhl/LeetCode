/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
	if (!node) {
        return null;
    }

    const visited = new Map<number, Node>();

    const dfs = (originalNode: Node): Node => {
        if (visited.has(originalNode.val)) {
            return visited.get(originalNode.val)!;
        }

        const clonedNode = new Node(originalNode.val);
        visited.set(clonedNode.val, clonedNode);

        for (const neighbor of originalNode.neighbors) {
            const clonedNeighbor = dfs(neighbor);
            clonedNode.neighbors.push(clonedNeighbor);
        }

        return clonedNode;
    };

    return dfs(node);
};