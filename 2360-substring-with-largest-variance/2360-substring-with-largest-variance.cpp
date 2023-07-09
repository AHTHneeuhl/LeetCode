class Solution {
public:
    int largestVariance(string s) {
        int maxVariance = 0;
        unordered_set<char> uniqueChars(begin(s), end(s));
        
        for (char major : uniqueChars) {
            for (char minor : uniqueChars) {
                int variance = 0;
                int hasMinor = 0;
                int firstMinor = 0;
                
                for (auto ch : s) {
                    variance += (ch == major);
                    
                    if (ch == minor) {
                        hasMinor = true;
                        
                        if (firstMinor && variance >= 0)
                            firstMinor = false;
                        else if (--variance < 0) {
                            firstMinor = true;
                            variance = -1;
                        }
                    }
                    
                    maxVariance = max(maxVariance, hasMinor ? variance : 0);
                }
            }
        }
        
        return maxVariance;
    }
};