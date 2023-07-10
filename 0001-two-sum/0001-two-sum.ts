function twoSum(nums: number[], target: number): number[] {
    const lookup: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (lookup.has(diff)) return [lookup.get(diff), i];
        lookup.set(nums[i], i);
    }
};