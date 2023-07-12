function isValid(s: string): boolean {
    const lookup: { [key: string]: string } = {
        '[': ']',
        '(': ')',
        '{': '}',
    };
    const stack: string[] = [];

    for (const ch of s) {
        if (ch in lookup) {
            stack.push(ch);
        } else if (!stack.length || ch !== lookup[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;
};