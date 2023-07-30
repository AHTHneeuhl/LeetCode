function findMin(nums: number[]): number {
    let l: number = 0;
    let r: number = nums.length - 1;

    while (l < r) {
        const m: number = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return nums[l];
};