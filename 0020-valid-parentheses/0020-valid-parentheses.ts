function isValid(s: string): boolean {
    const stack:Array<string> = new Array();

    for (const c of s) {
        switch (c) {
            case "(":
            case "[":
            case "{":
            stack.push(c);
            break;
            case ")":
                if (stack.length === 0 || stack[stack.length - 1] !== "(") return false;
                else stack.pop();
                break;
            case "]":
                if (stack.length === 0 || stack[stack.length - 1] !== "[") return false;
                else stack.pop();
                break;
            case "}":
                if (stack.length === 0 || stack[stack.length - 1] !== "{") return false;
                else stack.pop();
                break;
            default:
                return;
        }
    }

    return stack.length === 0;
};