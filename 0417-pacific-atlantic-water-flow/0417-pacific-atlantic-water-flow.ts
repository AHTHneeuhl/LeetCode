function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const pacificReachable: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
    const atlanticReachable: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
    const result: number[][] = [];

    const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(row: number, col: number, ocean: boolean[][]) {
        ocean[row][col] = true;

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                !ocean[newRow][newCol] &&
                heights[newRow][newCol] >= heights[row][col]
            ) {
                dfs(newRow, newCol, ocean);
            }
        }
    }

    // DFS from the edges to mark reachable cells
    for (let row = 0; row < m; row++) {
        dfs(row, 0, pacificReachable);
        dfs(row, n - 1, atlanticReachable);
    }

    for (let col = 0; col < n; col++) {
        dfs(0, col, pacificReachable);
        dfs(m - 1, col, atlanticReachable);
    }

    // Find cells reachable from both oceans
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (pacificReachable[row][col] && atlanticReachable[row][col]) {
                result.push([row, col]);
            }
        }
    }

    return result;
};