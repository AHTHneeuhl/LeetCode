/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0; // index for the red color
    let mid = 0; // index for the white color
    let high = nums.length - 1; // index for the blue color

    while (mid <= high) {
        const color = nums[mid];
        if (color === 0) {
            // If the color is red (0), swap with the element at the low index
            swap(nums, low, mid);
            low++;
            mid++;
        } else if (color === 1) {
            // If the color is white (1), move to the next element
            mid++;
        } else if (color === 2) {
        // If the color is blue (2), swap with the element at the high index
            swap(nums, mid, high);
            high--;
        }
    }
};

function swap(nums: number[], i: number, j: number): void {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}