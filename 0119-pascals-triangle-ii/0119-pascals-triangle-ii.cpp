class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> currow;
        currow.push_back(1);
        if (rowIndex == 0) return currow;
        vector<int> prev = getRow(rowIndex - 1);
 
        for(int i = 1; i < prev.size(); i++) {
            int curr = prev[i - 1] + prev[i];
            currow.push_back(curr);
        }
        
        currow.push_back(1);
        return currow;
    }
};