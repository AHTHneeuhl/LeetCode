class Solution {
public:
    int minimumSum(vector<int>& nums) {
        int n = nums.size(), minLeft = INT_MAX, res = INT_MAX;
        vector<int> minRight(n, INT_MAX);
        for (int i = n - 2; i >= 0; --i) minRight[i] = min(minRight[i + 1], nums[i + 1]);
        for (int i = 1; i < n - 1; ++i) {
            minLeft = min(minLeft, nums[i - 1]);
            if (minLeft < nums[i] && minRight[i] < nums[i]) res = min(res, minLeft + minRight[i] + nums[i]);
        }
        return res == INT_MAX ? -1 : res;
    }
};