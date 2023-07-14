function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];

    for (const digit of num) {
        while (
            k > 0 &&
            stack.length > 0 &&
            Number(digit) < Number(stack[stack.length - 1])
        ) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Remove remaining k digits from the end, if any
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Build the final result
    let result = "";
    let leadingZero = true;
    for (const digit of stack) {
        if (leadingZero && digit === "0") {
            continue;
        }
        leadingZero = false;
        result += digit;
    }

    return result === "" ? "0" : result;
};