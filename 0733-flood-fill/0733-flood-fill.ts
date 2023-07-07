function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialColor: number = image[sr][sc];
    if (initialColor === color) {
        return image; // No need to perform flood fill if the initial and new colors are the same
    }

    const directions: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // Up, Right, Down, Left

    dfs(sr, sc, image, initialColor, color, directions);

    return image;
};

function dfs(row: number, col: number, image: number[][], initialColor: number, color: number, directions: number[][]): void {
    const n: number = image.length;
    const m: number = image[0].length;
    // Check if the current pixel is within bounds and has the initial color
    if (row < 0 || row >= n || col < 0 || col >= m || image[row][col] !== initialColor) {
        return;
    }

    // Update the color of the current pixel
    image[row][col] = color;

    // Recursively call DFS on the neighboring pixels
    for (const [dx, dy] of directions) {
        const newRow: number = row + dx;
        const newCol: number = col + dy;
        dfs(newRow, newCol, image, initialColor, color, directions);
    }
}