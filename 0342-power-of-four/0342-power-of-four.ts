function isPowerOfFour(n: number): boolean {
    if (n <= 0) {
        return false;
    }

    // Check if it's a power of two
    if ((n & (n - 1)) === 0) {
        // Check if the set bit is at an even position
        return (n & 0x55555555) === n;
    }

    return false;
};