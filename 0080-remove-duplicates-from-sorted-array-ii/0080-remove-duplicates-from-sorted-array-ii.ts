function removeDuplicates(nums: number[]): number {
    if (nums.length < 2) return nums.length;
    let slow = 2;
    let fast = 2;

    while (fast < nums.length) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow += 1;
        }
        fast += 1;
    }

    return slow;
};