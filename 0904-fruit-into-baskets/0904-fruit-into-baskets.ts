function totalFruit(fruits: number[]): number {
    const count: { [key: number]: number } = {};
    let left = 0;
    let total = 0;
    let result = 0;

    for (let r = 0; r < fruits.length; r++) {
        count[fruits[r]] = (count[fruits[r]] || 0) + 1;
        total++;

        while (Object.keys(count).length > 2) {
            const f = fruits[left];
            count[f]--;
            total--;

            if (count[f] === 0) {
                delete count[f];
            }

            left++;
        }

        result = Math.max(result, total);
    }

    return result;
};