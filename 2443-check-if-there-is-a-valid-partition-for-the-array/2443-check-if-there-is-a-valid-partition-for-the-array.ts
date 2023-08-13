function validPartition(nums: number[]): boolean {
    const n: number = nums.length;

    const cache: Map<number, boolean> = new Map();

    function cal(x: number): boolean {
        if (cache.has(x)) {
            return cache.get(x)!;
        }

        if (x === n) {
            return true;
        }

        let result = false;

        if (x + 1 < n && nums[x] === nums[x + 1] && cal(x + 2)) {
            result = true;
        } else if (x + 2 < n && nums[x] === nums[x + 1] && nums[x + 1] === nums[x + 2] && cal(x + 3)) {
            result = true;
        } else if (x + 2 < n && nums[x] + 1 === nums[x + 1] && nums[x + 1] === nums[x + 2] - 1 && cal(x + 3)) {
            result = true;
        }

        cache.set(x, result);
        return result;
    }

    return cal(0);
};