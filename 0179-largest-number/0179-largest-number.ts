function largestNumber(nums: number[]): string {
    const largestNum = nums
        .map(String)
        .sort(compare)
        .join('');

    return largestNum[0] === '0' ? '0' : largestNum;
};

function compare(x: string, y: string): number {
    return (x + y) > (y + x) ? -1 : ((x + y) < (y + x) ? 1 : 0);
}