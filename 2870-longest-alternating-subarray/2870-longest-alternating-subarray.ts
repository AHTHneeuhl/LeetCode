function alternatingSubarray(nums: number[]): number {
    let j: number = 0;
    let res: number = 0;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[j] + (i - j) % 2)
            j = i - (nums[i - 1] === nums[i] - 1 ? 1 : 0);
        res = Math.max(res, i - j + 1);
    }
    return res === 1 ? -1 : res;
};