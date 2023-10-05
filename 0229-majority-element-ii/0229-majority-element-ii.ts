function majorityElement(nums: number[]): number[] {
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;

    // Step 1: Find potential candidates
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Count the occurrences of the candidates
    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const n = nums.length;

    if (count1 > n / 3) {
        result.push(candidate1);
    }

    if (count2 > n / 3) {
        result.push(candidate2);
    }

    return result;
};