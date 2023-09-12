function minDeletions(s: string): number {
    const charCount = new Map<string, number>();

    // Count the frequency of each character in the string
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    const freqCount = new Set<number>();
    let deletions = 0;

    // Iterate through the character frequencies
    for (let count of charCount.values()) {
        while (freqCount.has(count)) {
        // If the frequency is already in the set, decrement it until it's unique
            count--;
            deletions++;
        }

        // Add the unique frequency to the set
        if (count > 0) {
            freqCount.add(count);
        }
    }

    return deletions;
};