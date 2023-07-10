function containsDuplicate(nums: number[]): boolean {
    const lookup = new Set<number>();

    for (let num of nums) {
        if (lookup.has(num)) return true;
        lookup.add(num);
    }

    return false;
};