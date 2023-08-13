function maxSum(nums: number[]): number {
    let res = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const x = nums[i], y = nums[j];
            if (helper(x) == helper(y)) {
                res = Math.max(x + y, res);
            }
        }
    }

    return res;
};

function helper(num: number) {
    let mx = 0;

    while (num > 0) {
        mx = Math.max(mx, num % 10);
        num = Math.floor(num / 10);
    }

    return mx;
}