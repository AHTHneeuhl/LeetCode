function reorganizeString(s: string): string {
    const charCount: { [key: string]: number } = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    const maxCount = charCount[sortedChars[0]];
    const totalLength = s.length;
    
    if (maxCount > Math.ceil(totalLength / 2)) {
        return ""; // Not possible to rearrange
    }
    
    const result: string[] = new Array(totalLength);
    let idx = 0;
    
    for (const char of sortedChars) {
        while (charCount[char] > 0) {
            if (idx >= totalLength) {
                idx = 1; // Start from the second position
            }
            result[idx] = char;
            charCount[char]--;
            idx += 2; // Move two steps ahead
        }
    }
    
    return result.join("");
};