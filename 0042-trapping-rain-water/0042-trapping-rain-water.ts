function trap(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let res: number = 0;
    let left_max: number = 0;
    let right_max: number = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                res += (left_max - height[left]);
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                res += (right_max - height[right]);
            }
            right--;
        }
    }
    
    return res;
};