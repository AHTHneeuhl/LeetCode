function twoSum(numbers: number[], target: number): number[] {
    let l = 0, r = numbers.length - 1;

    while (numbers[l] + numbers[r] !== target) {
        if (numbers[l] + numbers[r] < target) l++;
        else r--;
    }
    
    return [l + 1, r + 1];
};