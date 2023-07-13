function isPerfectSquare(num: number): boolean {
    let l = 0, r = num;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const square = m ** 2;

        if (square === num) return true;
        else if (square > num) r = m - 1;
        else l = m + 1;
    }

    return false;
};