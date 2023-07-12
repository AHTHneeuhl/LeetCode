class NumArray {
    private arr: number[];

    constructor(nums: number[]) {
        this.arr = [0];
        for (let i = 0; i < nums.length; i++) {
            this.arr[i + 1] = this.arr[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.arr[right + 1] - this.arr[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */