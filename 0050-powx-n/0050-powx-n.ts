function myPow(x: number, n: number): number {
    if (n == 0) return 1;
    
    if (n < 0) {
        n = -1 * n;
        x = 1.0 / x;
    }
    
    let result = 1;
    while (n !== 0) {
        if (n % 2 === 1) {
            result *= x;
            n -= 1;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    
    return result;
};