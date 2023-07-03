function minCostClimbingStairs(cost: number[]): number {
    let a: number = 0;
    let b: number = 0;

    for (let i: number = 0; i < cost.length; i++) {
        const t: number = cost[i] + Math.min(a, b);
        a = b;
        b = t;
    }

    return Math.min(a, b);
};