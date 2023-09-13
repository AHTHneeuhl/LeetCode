function candy(ratings: number[]): number {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Initialize candies array with 1 candy for each child

    // Traverse from left to right, ensuring right neighbor has more candies if ratings increase
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Traverse from right to left, ensuring left neighbor has more candies if ratings increase
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    // Sum up the candies array to get the total minimum candies needed
    return candies.reduce((sum, num) => sum + num, 0);
};