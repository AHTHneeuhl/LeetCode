function isFascinating(n: number): boolean {
    return "123456789" === `${n}${n*2}${n*3}`.split("").sort().join("");
};