function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");

    if (pattern.length !== words.length) return false;

    const charMap: Map<string, string> = new Map();
    const wordMap: Map<string, string> = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if ((charMap.has(char) && charMap.get(char) !== word) || (wordMap.has(word) && wordMap.get(word) !== char)) {
            return false;
        }

        charMap.set(char, word);
        wordMap.set(word, char);
    }

    return true;
};