function getConcatenation(nums: number[]): number[] {
    const res = new Array(2 * nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i];
        res[nums.length + i] = nums[i];
    }

    return res;
};