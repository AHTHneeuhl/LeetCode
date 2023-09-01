function countBits(n: number): number[] {
    const ans: number[] = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        // The number of 1's in the binary representation of i
        // is equal to the number of 1's in i/2 plus the least significant bit of i
        ans[i] = ans[i >> 1] + (i & 1);
    }
    
    return ans;
};