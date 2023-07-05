function numberOfGoodSubarraySplits(nums: number[]): number {
    let res: number = 1;
    const m: number = 10**9 + 7;
    let count: number = 0;
    let i: number = 0;

    while (i < nums.length && nums[i] === 0) {
        ++i;
    }

    if (i >= nums.length) {
        return 0;
    }

    while (i < nums.length) {
        if (nums[i] === 1) {
            res = (res * (count + 1)) % m;
            count = 0;
        } else {
            count++;
        }
        i++;
    }

    return res;
};