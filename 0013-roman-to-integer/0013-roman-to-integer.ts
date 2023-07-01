function romanToInt(s: string): number {
    const mp: Map<string, number> = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (mp.get(s[i])! < mp.get(s[i + 1])!) {
        sum += mp.get(s[i + 1])! - mp.get(s[i])!;
        i++;
        continue;
        }
        sum += mp.get(s[i])!;
    }
    
    return sum;
};