function maxArrayValue(nums: number[]): number {
    const n = nums.length;
    let result = nums[n - 1];
    let total = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] <= total) {
            total += nums[i];
        } else {
            total = nums[i];
        }

        result = Math.max(result, total);
    }

    return result;
};