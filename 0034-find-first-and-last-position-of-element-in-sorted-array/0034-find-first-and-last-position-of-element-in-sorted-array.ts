function searchRange(nums: number[], target: number): number[] {
    function search(n: number): number {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] >= n) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l;
    }

    const l = search(target);
    return target === nums[l] ? [l, search(target + 1) - 1] : [-1, -1];
};