function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, currentSubset: number[]) {
        result.push([...currentSubset]);
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue; // Skip duplicates to avoid duplicate subsets
            }
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
    backtrack(0, []);
    return result;
};