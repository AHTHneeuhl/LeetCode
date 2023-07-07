function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    wordList.push(beginWord);
    const m: number = wordList[0].length;
    const n: number = wordList.length;

    const wordsInverse: { [key: string]: number } = {};
    for (let i = 0; i < wordList.length; i++) {
        wordsInverse[wordList[i]] = i;
    }

    const wordsGraph: { [key: number]: Set<number> } = {};
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    if (!(endWord in wordsInverse)) {
        return 0;
    }
    const endInd: number = wordsInverse[endWord];

    for (const word of wordList) {
        for (let l = 0; l < m; l++) {
            const p1: string = word.slice(0, l);
            const p2: string = word.slice(l + 1);
            for (const i of alphabet) {
                const tmp: string = p1 + i + p2;
                if (tmp in wordsInverse && tmp !== word) {
                if (!(wordsInverse[word] in wordsGraph)) {
                    wordsGraph[wordsInverse[word]] = new Set();
                }
                wordsGraph[wordsInverse[word]].add(wordsInverse[tmp]);
                }
            }
        }
    }

    const depths: number[] = Array(n - 1).fill(-1).concat(0);
    const queue: number[] = [n - 1];

    while (queue.length) {
        const curr: number = queue.shift()!;
        if (curr === endInd) {
            return depths[endInd] + 1;
        }
        for (const neib of wordsGraph[curr] || []) {
            if (depths[neib] === -1) {
                queue.push(neib);
                depths[neib] = depths[curr] + 1;
            }
        }
    }

    return 0;
};