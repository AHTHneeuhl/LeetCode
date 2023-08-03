function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const d: { [key: string]: string } = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    return [...product(d, ...digits.split("").map((i) => d[i].split("")))].map((num) => num.join(""));
};

function* product(d: { [key: string]: string }, ...arrays: string[][]): IterableIterator<string[]> {
    if (arrays.length === 0) {
        yield [];
        return;
    }
    const [head, ...tail] = arrays;
    for (const char of head) {
        for (const suffix of product(d, ...tail)) {
            yield [char, ...suffix];
        }
    }
}