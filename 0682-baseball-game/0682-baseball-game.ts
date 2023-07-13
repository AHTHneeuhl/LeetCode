function calPoints(operations: string[]): number {
    const stack:number[] = [];

    for (let ops of operations) {
        if (ops === 'D' && stack.length) {
            const last = stack[stack.length - 1];
            stack.push(2 * last);
        }
        else if (ops === '+' && stack.length >= 2) {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
        else if (ops === 'C' && stack.length) {
            stack.pop();
        }
        else stack.push(Number(ops));
    }

    return stack.reduce((a, b) => a + b, 0);
};