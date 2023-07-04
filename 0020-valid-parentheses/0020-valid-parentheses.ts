function isValid(s: string): boolean {
    const look: { [key: string]: string } = {
        '[': ']',
        '(': ')',
        '{': '}',
    };
    const stack: string[] = [];

    for (const ch of s) {
        if (ch in look) {
            stack.push(ch);
        } else if (!stack.length || ch !== look[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;
};