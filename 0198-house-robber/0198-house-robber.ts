function rob(nums: number[]): number {
    let prev = 0, curr = 0;

    for (let num of nums) {
        [prev, curr] = [curr, Math.max(prev + num, curr)];
    }

    return curr;
};