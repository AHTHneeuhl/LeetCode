function longestStrChain(words: string[]): number {
    words.sort((a, b) => a.length - b.length);

    const wordChainLengths: Map<string, number> = new Map();

    let maxLength = 1;

    for (const word of words) {
        let currentLength = 1;

        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);
            if (wordChainLengths.has(predecessor)) {
                currentLength = Math.max(currentLength, wordChainLengths.get(predecessor)! + 1);
            }
        }

        wordChainLengths.set(word, currentLength);
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};