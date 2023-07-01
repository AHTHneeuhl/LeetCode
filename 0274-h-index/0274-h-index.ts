function hIndex(citations: number[]): number {
    const n = citations.length;
    const buckets: number[] = new Array(n + 1).fill(0);

    for (const elem of citations) {
        buckets[Math.min(elem, n)] += 1;
    }

    const accum: number[] = [...buckets.slice(1)].reverse().reduce((acc, val) => {
        acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + val);
        return acc;
    }, []).reverse();

    const compar: boolean[] = Array.from({ length: n }, (_, i) => accum[i] >= i + 1);

    return compar.concat([false]).indexOf(false);
};