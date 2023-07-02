function canConstruct(ransomNote: string, magazine: string): boolean {
    const charFreq: { [key: string]: number } = {};

    for (const char of magazine) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!charFreq[char] || charFreq[char] === 0) {
        return false;
        }
        charFreq[char]--;
    }

    return true;
};