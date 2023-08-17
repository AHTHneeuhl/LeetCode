function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right
    
    const queue: [number, number][] = [];
    const distances: number[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(Infinity));
    
    // Push all cells with value 0 into the queue and set distance to 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                distances[i][j] = 0;
            }
        }
    }
    
    while (queue.length > 0) {
        const [x, y] = queue.shift()!;
        
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                if (distances[newX][newY] > distances[x][y] + 1) {
                    distances[newX][newY] = distances[x][y] + 1;
                    queue.push([newX, newY]);
                }
            }
        }
    }
    
    return distances;
};