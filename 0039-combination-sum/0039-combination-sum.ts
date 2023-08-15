function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(index: number, target: number, combination: number[]) {
        if (target === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                combination.push(candidates[i]);
                backtrack(i, target - candidates[i], combination);
                combination.pop();
            }
        }
    }

    candidates.sort((a, b) => a - b);

    backtrack(0, target, []);

    return result;
};