/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let l = 1, r = n;

    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        if (guess(m) == 0) return m;
        else if (guess(m) == 1) l = m + 1;
        else r = m - 1;
    }

    return -1;
};