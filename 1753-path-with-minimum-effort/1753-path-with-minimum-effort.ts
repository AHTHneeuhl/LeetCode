class Cell {
  constructor(public row: number, public col: number, public effort: number) {}
}

function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const cols = heights[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

    // Create a 2D array to store the minimum effort required to reach each cell.
    const minEffort = new Array(rows).fill(null).map(() => new Array(cols).fill(Infinity));

    // Priority queue to explore cells in increasing order of effort.
    const queue: Cell[] = [];
    
    // Start at the top-left cell with an effort of 0.
    queue.push(new Cell(0, 0, 0));
    
    while (queue.length > 0) {
        // Pop the cell with the minimum effort from the priority queue.
        queue.sort((a, b) => a.effort - b.effort);
        const cell = queue.shift()!;
        
        if (cell.row === rows - 1 && cell.col === cols - 1) {
        // Reached the bottom-right cell, return the effort required.
            return cell.effort;
        }
        
        for (const [dr, dc] of directions) {
            const newRow = cell.row + dr;
            const newCol = cell.col + dc;
            
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                // Calculate the effort for the new cell.
                const newEffort = Math.max(cell.effort, Math.abs(heights[newRow][newCol] - heights[cell.row][cell.col]));
                
                if (newEffort < minEffort[newRow][newCol]) {
                    // If the new effort is smaller, update the minimum effort and add the cell to the queue.
                    minEffort[newRow][newCol] = newEffort;
                    queue.push(new Cell(newRow, newCol, newEffort));
                }
            }
        }
    }
    
    // If the queue becomes empty and we haven't reached the bottom-right cell, return -1 (shouldn't happen).
    return -1;
};