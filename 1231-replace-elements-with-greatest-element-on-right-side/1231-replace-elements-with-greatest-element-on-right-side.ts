function replaceElements(arr: number[]): number[] {
    let maxRight = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const t = arr[i];
        arr[i] = maxRight;
        maxRight = Math.max(maxRight, t);
    }

    return arr;
};