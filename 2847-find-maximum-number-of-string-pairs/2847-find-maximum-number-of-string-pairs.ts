function maximumNumberOfStringPairs(words: string[]): number {
    let maxPairs = 0;
    const frequency = new Map<string, number>();

    for (const word of words) {
        const reversed = word.split('').reverse().join('');

        if (frequency.has(reversed) && frequency.get(reversed) > 0) {
            maxPairs++;
            frequency.set(reversed, frequency.get(reversed) - 1);
        } else {
            frequency.set(word, (frequency.get(word) || 0) + 1);
        }
    }

    return maxPairs;
};