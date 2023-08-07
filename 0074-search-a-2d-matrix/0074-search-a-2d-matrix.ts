function searchMatrix(matrix: number[][], target: number): boolean {
    let l = 0;
    let r = matrix.length * matrix[0].length - 1;
    const n = matrix[0].length;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);

        if (matrix[Math.floor(m / n)][m % n] === target) {
            return true;
        } else if (matrix[Math.floor(m / n)][m % n] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return false;
};