class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        int i = 0;
        vector<string> result;
        int n = nums.size();

        while (i < n) {
            int beg = i;
            int end = i;

            while (end < n - 1 && nums[end] + 1 == nums[end + 1]) {
                end++;
            }

            result.push_back(to_string(nums[beg]) + (beg != end ? "->" + to_string(nums[end]) : ""));
            i = end + 1;
        }

        return result;
    }
};