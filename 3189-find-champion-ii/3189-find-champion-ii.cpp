class Solution {
public:
    int findChampion(int n, vector<vector<int>>& edges) {
        vector<int> deg(n);
        for (auto &e : edges) deg[e[1]]++;
        int res = -1;
        for (int i = 0; i < n; ++i) {
            if (deg[i] == 0) {
                if (res != -1) return -1;
                res = i;
            }
        }
        return res;
    }
};