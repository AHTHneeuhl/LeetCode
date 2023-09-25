function findTheDifference(s: string, t: string): string {
    const charCount = new Map<string, number>();

    // Count characters in string t
    for (const char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Subtract character counts from string s
    for (const char of s) {
        charCount.set(char, charCount.get(char)! - 1);
    }

    // Find the character with a count of 1 in t
    for (const [char, count] of charCount) {
        if (count === 1) {
            return char;
        }
    }

    // Return an empty string if no character is found (shouldn't happen)
    return '';
};