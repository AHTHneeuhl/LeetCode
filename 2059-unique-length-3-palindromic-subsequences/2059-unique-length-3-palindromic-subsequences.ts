function countPalindromicSubsequence(s: string): number {
    let count = 0;
    const chars = new Set<string>(s);

    for(const char of chars){
        const first = s.indexOf(char), last = s.lastIndexOf(char);
        count += new Set(s.slice(first + 1, last)).size;
    }

    return count;
};