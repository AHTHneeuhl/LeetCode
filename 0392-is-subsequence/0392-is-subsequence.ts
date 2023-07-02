function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) return false;
    if (s.length === 0) return true;

    let subsequence = 0;

    for (let i = 0; i < t.length; i++) {
        if (subsequence <= s.length - 1) {
            if (s[subsequence] === t[i]) {
                subsequence += 1;
            }
        }
    }

    return subsequence === s.length;
};