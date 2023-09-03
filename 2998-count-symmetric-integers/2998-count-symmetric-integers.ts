function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;

    for (let num = low; num <= high; num++) {
        if (isSymmetricNumber(num)) {
            count++;
        }
    }

    return count;
};

function isSymmetricNumber(num: number): boolean {
    const numStr = num.toString();
    const length = numStr.length;
    
    if (length % 2 === 1) {
        return false;
    }

    const halfLength = length / 2;
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < halfLength; i++) {
        sumLeft += parseInt(numStr[i]);
        sumRight += parseInt(numStr[length - 1 - i]);
    }

    return sumLeft === sumRight;
}