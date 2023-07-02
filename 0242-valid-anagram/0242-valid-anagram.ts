function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charFreq: { [key: string]: number } = {};

    for (const char of s) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    for (const char of t) {
        if (!charFreq[char]) {
            return false;
        }
        charFreq[char]--;
    }

    for (const key in charFreq) {
        if (charFreq[key] !== 0) {
            return false;
        }
    }

    return true;
};