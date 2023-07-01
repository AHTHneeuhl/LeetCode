function longestCommonPrefix(words: string[]): string {
    if (!words.length) return "";

    let i: number;
    for (i = 0; i < words[0].length; i++) {
        if (!words.every((word) => i < word.length && word[i] === words[0][i])) {
            break;
        }
    }

    return words[0].substring(0, i);
};