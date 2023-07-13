function sortedSquares(nums: number[]): number[] {
    let l = 0, r = nums.length - 1;
    const res = [];

    while (l <= r) {
        const left = Math.abs(nums[l]), right = Math.abs(nums[r]);

        if (left > right) {
            res[r - l] = left * left;
            l++;
        } else {
            res[r - l] = right * right;
            r--;
        }
    }

    return res;
};