function minimumDeleteSum(s1: string, s2: string): number {
     if (s1.length < s2.length) {
        return minimumDeleteSum(s2, s1);
    }

    let m = s1.length, n = s2.length;
    let currRow = new Array(n + 1);
    currRow[0] = 0;
    for (let j = 1; j <= n; j++) {
        currRow[j] = currRow[j - 1] + s2[j - 1].charCodeAt(0);
    }

    for (let i = 1; i <= m; i++) {
        
        let diag = currRow[0];
        currRow[0] += s1[i - 1].charCodeAt(0);
        
        for (let j = 1; j <= n; j++) {

            let result;
            
            // If characters are the same, the answer is top-left-diagonal value
            if (s1[i - 1] == s2[j - 1]) {
                result = diag;
            }
            
            // Otherwise, the answer is minimum of top and left values with
            // deleted character's ASCII value
            else {
                result = Math.min(
                    s1[i - 1].charCodeAt(0) + currRow[j],
                    s2[j - 1].charCodeAt(0) + currRow[j - 1]
                );
            }
            
            // Before overwriting currRow[j] with answer, save it in diag
            // for the next column
            diag = currRow[j];
            currRow[j] = result;
        }
    }
    
    return currRow[n];
};