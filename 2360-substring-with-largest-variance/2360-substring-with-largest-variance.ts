function largestVariance(s: string): number {
    let maxVariance = 0;
    const uniqueChars = new Set(s);

    for (const major of uniqueChars) {
        for (const minor of uniqueChars) {
            let variance = 0;
            let hasMinor = false;
            let firstMinor = false;

            for (const ch of s) {
                variance += Number(ch === major);

                if (ch === minor) {
                    hasMinor = true;

                    if (firstMinor && variance >= 0) {
                        firstMinor = false;
                    } else if (--variance < 0) {
                        firstMinor = true;
                        variance = -1;
                    }
                }

                maxVariance = Math.max(maxVariance, hasMinor ? variance : 0);
            }
        }
    }

    return maxVariance;
};