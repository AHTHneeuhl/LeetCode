function isHappy(n: number): boolean {
    const unique = new Set<number>();

    while (true) {
        const digits = getDigits(n);
        const sumOfSquares = calculateSumOfSquares(digits);

        if (sumOfSquares === 1) {
            return true;
        }

        if (unique.has(sumOfSquares)) {
            return false;
        }

        unique.add(sumOfSquares);
        n = sumOfSquares;
    }
};

function getDigits(n: number): number[] {
    const digits: number[] = [];

    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    return digits;
}

function calculateSumOfSquares(digits: number[]): number {
    let sum = 0;

    for (const digit of digits) {
        sum += digit ** 2;
    }

    return sum;
}