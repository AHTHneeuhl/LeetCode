function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, target: number, combination: number[]) {
        if (target === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (candidates[i] <= target) {
                combination.push(candidates[i]);
                backtrack(i + 1, target - candidates[i], combination);
                combination.pop();
            }
        }
    };

    candidates.sort((a, b) => a - b);
    backtrack(0, target, []);;

    return result;
};