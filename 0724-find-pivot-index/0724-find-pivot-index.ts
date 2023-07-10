function pivotIndex(nums: number[]): number {
    let total = nums.reduce((sum, num) => sum + num, 0);
    let res = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total -= num;
        
        if (res === total) {
            return i;
        }
        
        res += num;
    }
    
    return -1;
};