function findKthLargest(nums: number[], k: number): number {
    const partition = (left: number, right: number): number => {
        const pivot = nums[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
        return i + 1;
    };

    const quickSelect = (left: number, right: number, k: number): number => {
        if (left <= right) {
            const pivotIndex = partition(left, right);

            if (pivotIndex === k - 1) {
                return nums[pivotIndex];
            } else if (pivotIndex < k - 1) {
                return quickSelect(pivotIndex + 1, right, k);
            } else {
                return quickSelect(left, pivotIndex - 1, k);
            }
        }
    };

    return quickSelect(0, nums.length - 1, k);
};