function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0]); // Sort the pairs based on the first element

    const n = pairs.length;
    const dp = new Array(n).fill(1); // Initialize a DP array with 1s
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};