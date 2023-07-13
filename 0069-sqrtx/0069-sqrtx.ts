function mySqrt(x: number): number {
    if (x === 0 || x === 1) return x;
    let l = 1, r = x;
    
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (m * m > x) r = m;
        else l = m + 1;
    }

    return l - 1;
};