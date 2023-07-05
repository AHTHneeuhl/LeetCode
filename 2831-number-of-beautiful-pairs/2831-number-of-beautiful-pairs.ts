function countBeautifulPairs(nums: number[]): number {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const d = num % 10;
      for (let j = 0; j < i; j++) {
        let n = nums[j];
        while (n >= 10) {
          n = Math.floor(n / 10);
        }
        pairs += gcd(d, n) === 1 ? 1 : 0;
      }
    }
    return pairs;
};

function gcd(a: number, b: number): number {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}