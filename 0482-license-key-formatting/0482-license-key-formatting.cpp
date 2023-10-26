class Solution {
public:
    string licenseKeyFormatting(string s, int k) {
        int count = 0;
        int n = s.length();
        string res = "";
        for (int i = n - 1; i >= 0; i--) {
            if (s[i] != '-') {
                res.push_back(toupper(s[i]));
                count++;
                if (count == k) {
                    res.push_back('-');
                    count = 0;
                }
            }
        }
        if (res.size() > 0 && res.back() == '-') {
           res.pop_back();
        }

        reverse(res.begin(), res.end());
        return res;
    }
};