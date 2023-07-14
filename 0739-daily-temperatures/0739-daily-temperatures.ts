function dailyTemperatures(temperatures: number[]): number[] {
    const n: number = temperatures.length;
    const answer: number[] = new Array<number>(n).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx: number = stack.pop()!;
            answer[idx] = i - idx;
        }

        stack.push(i);
    }

    return answer;
};