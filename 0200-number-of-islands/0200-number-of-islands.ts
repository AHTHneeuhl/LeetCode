function numIslands(grid: string[][]): number {
    const visited: Set<string> = new Set();
    let count: number = 0;
    for (let r: number = 0; r < grid.length; r++) {
        for (let c: number = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) count += 1;
        }
    }
    return count;
};

function explore(grid: string[][], r: number, c: number, visited: Set<string>): boolean {
    const rowInbounds: boolean = 0 <= r && r < grid.length;
    const colInbounds: boolean = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;

    if (grid[r][c] === "0") return false;

    const pos: string = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}