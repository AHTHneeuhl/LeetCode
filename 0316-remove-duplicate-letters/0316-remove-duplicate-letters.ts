function removeDuplicateLetters(s: string): string {
    const stack: string[] = [];
    const countMap: Map<string, number> = new Map();
    const inStack: Map<string, boolean> = new Map();

    for (const char of s) {
        if (countMap.has(char)) {
            countMap.set(char, countMap.get(char)! + 1);
        } else {
            countMap.set(char, 1);
        }
    }

    for (const char of s) {
        countMap.set(char, countMap.get(char)! - 1);

        if (inStack.get(char)) continue;

        while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            countMap.get(stack[stack.length - 1]) > 0
        ) {
            const topChar = stack.pop()!;
            inStack.set(topChar, false);
        }

        stack.push(char);
        inStack.set(char, true);
    }

    return stack.join('');
};