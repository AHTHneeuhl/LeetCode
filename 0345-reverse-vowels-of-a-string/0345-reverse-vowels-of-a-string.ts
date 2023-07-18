function reverseVowels(s: string): string {
    const chars: string[] = Array.from(s);
    const vowelsIndices: number[] = [];

    for (let i = 0; i < chars.length; i++) {
        if (/[aeiou]/i.test(chars[i])) {
            vowelsIndices.push(i);
        }
    }

    for (let i = 0, j = vowelsIndices.length - 1; i < j; i++, j--) {
        const temp = chars[vowelsIndices[i]];
        chars[vowelsIndices[i]] = chars[vowelsIndices[j]];
        chars[vowelsIndices[j]] = temp;
    }

    return chars.join('');
};