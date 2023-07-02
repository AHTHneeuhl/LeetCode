function removeDuplicates(nums: number[]): number {
    let slow = 1;
    let fast = 1;

    while (fast < nums.length) {
        if (nums[slow - 1] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow += 1;
        }
        fast += 1;
    }

    return slow;
};