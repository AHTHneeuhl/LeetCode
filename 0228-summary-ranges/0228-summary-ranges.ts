function summaryRanges(nums: number[]): string[] {
    let i = 0;
    const result: string[] = [];
    const n = nums.length;

    while (i < n) {
        let beg = i;
        let end = i;

        while (end < n - 1 && nums[end] + 1 === nums[end + 1]) {
        end++;
        }

        result.push(
        `${nums[beg]}${beg !== end ? "->" + nums[end] : ""}`
        );

        i = end + 1;
    }

    return result;
};