class QueueNode {
  constructor(public row: number, public col: number) {}
}

function orangesRotting(grid: number[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIRECTIONS = [
        [-1, 0], // Up
        [1, 0], // Down
        [0, -1], // Left
        [0, 1], // Right
    ];

    const queue: QueueNode[] = [];
    let freshOranges = 0;
    let minutes = 0;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 2) {
                queue.push(new QueueNode(row, col));
            } else if (grid[row][col] === 1) {
                freshOranges++;
            }
        }
    }

    while (queue.length > 0 && freshOranges > 0) {
        const queueSize = queue.length;
        let hasRottenOranges = false;

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift()!;

            for (const [dx, dy] of DIRECTIONS) {
                const newRow = node.row + dx;
                const newCol = node.col + dy;

                if (
                    newRow >= 0 &&
                    newRow < ROWS &&
                    newCol >= 0 &&
                    newCol < COLS &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    queue.push(new QueueNode(newRow, newCol));
                    freshOranges--;
                    hasRottenOranges = true;
                }
            }
        }

        if (hasRottenOranges) {
            minutes++;
        }
    }

    return freshOranges === 0 ? minutes : -1;
};