function removeElement(nums: number[], val: number): number {
    let idx = 0;
    for (const num of nums) {
        if (num !== val) {
            nums[idx] = num;
            idx++;
        }
    }
    return idx;
};