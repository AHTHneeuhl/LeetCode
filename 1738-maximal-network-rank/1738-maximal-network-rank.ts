function maximalNetworkRank(n: number, roads: number[][]): number {
    const adjacencyMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    const cityRank: number[] = Array(n).fill(0);

    for (const road of roads) {
        const [city1, city2] = road;
        adjacencyMatrix[city1][city2] = 1;
        adjacencyMatrix[city2][city1] = 1;
        cityRank[city1]++;
        cityRank[city2]++;
    }

    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const rank = cityRank[i] + cityRank[j] - adjacencyMatrix[i][j];
            maxRank = Math.max(maxRank, rank);
        }
    }

    return maxRank;
};