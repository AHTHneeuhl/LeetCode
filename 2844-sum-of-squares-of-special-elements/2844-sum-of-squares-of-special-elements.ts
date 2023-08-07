function sumOfSquares(nums: number[]): number {
    return nums
        .filter((v, i, arr) => arr.length % (i + 1) === 0)
        .reduce((acc, cur) => acc + cur * cur, 0);
};