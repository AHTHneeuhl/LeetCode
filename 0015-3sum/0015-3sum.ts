function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const n: number = nums.length;

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicates for the first number in the triplet
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left: number = i + 1;
        let right: number = n - 1;

        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // A triplet that sums to 0 is found, add it to the result array
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for the second and third numbers in the triplet
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                // The current sum is too small, move left pointer to increase the sum
                left++;
            } else {
                // The current sum is too large, move right pointer to decrease the sum
                right--;
            }
        }
    }

    return result;
};