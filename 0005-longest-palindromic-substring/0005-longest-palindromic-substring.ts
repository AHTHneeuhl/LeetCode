function longestPalindrome(s: string): string {
    const n = s.length;

    const isPalindrome: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));

    let maxLength = 1;
    let start = 0;

    for (let i = 0; i < n; i++) {
        isPalindrome[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            isPalindrome[i][i + 1] = true;
            maxLength = 2;
            start = i;
        }
    }

    for (let length = 3; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            const j = i + length - 1;

            if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
                isPalindrome[i][j] = true;

                if (length > maxLength) {
                    maxLength = length;
                    start = i
                }
            }
        }
    }

    const longestPalindromicSubstring = s.slice(start, start + maxLength);

    return longestPalindromicSubstring;
};