function longestAlternatingSubarray(nums: number[], threshold: number): number {
    let res = 0;
    for (let l = 0, cnt = 0; l < nums.length; ++l) {
        if (nums[l] <= threshold) {
            if (cnt)
                cnt = nums[l] % 2 === nums[l - 1] % 2 ? 0 : cnt + 1;
            if (cnt === 0)
                cnt = nums[l] % 2 === 0 ? 1 : 0;
        } else {
            cnt = 0;
        }
        res = Math.max(res, cnt);
    }
    return res;
};