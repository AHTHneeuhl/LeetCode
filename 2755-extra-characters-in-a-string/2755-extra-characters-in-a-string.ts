function minExtraChar(s: string, dictionary: string[]): number {
    const n: number = s.length;
    const dictionarySet: Set<string> = new Set(dictionary);
    const dp: number[] = Array(n + 1).fill(0);

    for (let start: number = n - 1; start >= 0; start--) {
        dp[start] = dp[start + 1] + 1;
        for (let end: number = start; end < n; end++) {
            const curr: string = s.substring(start, end + 1);
            if (dictionarySet.has(curr)) {
                dp[start] = Math.min(dp[start], dp[end + 1]);
            }
        }
    }

    return dp[0];
};