function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function generate(index: number, subset: number[]) {
        result.push([...subset]);

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i]);

            generate(i + 1, subset);

            subset.pop();
        }
    }

    generate(0, []);

    return result;
};