function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const lookup = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if (lookup.has(n) && (i - lookup.get(n) <= k)) return true;

        lookup.set(n, i);
    }

    return false;
};