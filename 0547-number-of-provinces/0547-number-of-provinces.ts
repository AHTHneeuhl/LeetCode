function findCircleNum(isConnected: number[][]): number {
    let n = isConnected.length;
    let count = 0;
    const visited: Set<number> = new Set();

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(isConnected, visited, i);
            count += 1;
        }
    }

    return count;
};

function dfs(isConnected: number[][], visited: Set<number>, x: number): void {
    if (visited.has(x)) return;
    visited.add(x);
    const n: number = isConnected.length;
    for (let i = 0; i < n; i++) {
        if (isConnected[x][i] === 1) dfs(isConnected, visited, i);
    }
}