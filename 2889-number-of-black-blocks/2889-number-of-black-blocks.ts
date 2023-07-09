function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
    const blockCounts: Map<string, number> = new Map();

    for (const a of coordinates) {
        const x = a[0];
        const y = a[1];

        if (x === m - 1 && y === n - 1) { // If last cell
            const key = getKey(x - 1, y - 1);
            blockCounts.set(key, (blockCounts.get(key) || 0) + 1);
        } else if (y === n - 1) { // If last column
            const key1 = getKey(x, y - 1);
            const key2 = getKey(x - 1, y - 1);
            blockCounts.set(key1, (blockCounts.get(key1) || 0) + 1);
            blockCounts.set(key2, (blockCounts.get(key2) || 0) + 1);
        } else if (x === m - 1) { // If last row
            const key1 = getKey(x - 1, y);
            const key2 = getKey(x - 1, y - 1);
            blockCounts.set(key1, (blockCounts.get(key1) || 0) + 1);
            blockCounts.set(key2, (blockCounts.get(key2) || 0) + 1);
        } else {  // Common cells
            const key1 = getKey(x - 1, y);
            const key2 = getKey(x, y - 1);
            const key3 = getKey(x - 1, y - 1);
            const key4 = getKey(x, y);
            blockCounts.set(key1, (blockCounts.get(key1) || 0) + 1);
            blockCounts.set(key2, (blockCounts.get(key2) || 0) + 1);
            blockCounts.set(key3, (blockCounts.get(key3) || 0) + 1);
            blockCounts.set(key4, (blockCounts.get(key4) || 0) + 1);
        }
    }

    const res: number[] = [0, 0, 0, 0, 0]; // Result Array

    for (const [key, value] of blockCounts) {
        const [a, b] = parseKey(key);
        if (a >= 0 && b >= 0) { // Do not count out of the array row and column
            res[value]++;
        }
    }

    const total = res.reduce((acc, cur) => acc + cur, 0); // Total count of 1, 2, 3, 4 in 2 * 2 block

    res[0] = (m - 1) * (n - 1) - total; // Total 0 black block in matrix - 1, 2, 3, 4 block
    return res;
};

function getKey(x: number, y: number): string {
    return `${x},${y}`;
}

function parseKey(key: string): number[] {
    return key.split(',').map(Number);
}