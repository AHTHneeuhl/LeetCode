class ArrayWrapper {
    private array: number[];

	constructor(nums: number[]) {
        this.array = nums;
    }

	valueOf() {
        return this.array.reduce((res, curr) => res + curr, 0);
    }

	toString() {
        return JSON.stringify(this.array);
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */