function arrangeCoins(n: number): number {
    let l = 1, r = n, res = 0;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const coins = (m / 2) * (m + 1);
        if (coins > n) {
            r = m - 1;
        } else {
            res = Math.max(res, m)
            l = m + 1;
        }
    }

    return res;
};