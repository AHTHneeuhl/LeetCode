function findPeakElement(nums: number[]): number {
    let l: number = 0;
    let r: number = nums.length - 1;
    while (l < r) {
        let m: number = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[m + 1]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};