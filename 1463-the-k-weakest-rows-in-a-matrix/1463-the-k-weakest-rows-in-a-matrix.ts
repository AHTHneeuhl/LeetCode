function kWeakestRows(mat: number[][], k: number): number[] {
    const rowCount = mat.length;
    const soldierCount = new Array<number>(rowCount);

    // Calculate the number of soldiers in each row
    for (let i = 0; i < rowCount; i++) {
        let left = 0;
        let right = mat[i].length - 1;
        let soldiers = 0;

        // Use binary search to count soldiers
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (mat[i][mid] === 1) {
                soldiers = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        soldierCount[i] = soldiers;
    }

    // Create an array of row indices and sort them based on soldier count and row index
    const rowIndices = Array.from({ length: rowCount }, (_, i) => i);
    rowIndices.sort((a, b) => {
        if (soldierCount[a] === soldierCount[b]) {
            return a - b; // If soldier counts are equal, sort by row index
        } else {
            return soldierCount[a] - soldierCount[b]; // Sort by soldier count
        }
    });

    // Return the first k row indices
    return rowIndices.slice(0, k);
};