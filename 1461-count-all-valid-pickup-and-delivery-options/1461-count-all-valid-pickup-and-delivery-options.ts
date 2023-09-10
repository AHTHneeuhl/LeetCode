function countOrders(n: number): number {
    const MOD = 1e9 + 7;
    let res = 1;

    for (let i = 2; i <= n; i++) {
        res = (res * ((i * 2 - 1) * (i * 2) / 2)) % MOD;
    }

    return res;
};