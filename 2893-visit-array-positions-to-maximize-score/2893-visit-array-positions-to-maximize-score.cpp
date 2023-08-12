class Solution {
public:
    long long maxScore(vector<int>& nums, int x) {
        long long even = nums[0] - (nums[0] % 2 ? x : 0);
        long long odd = nums[0] - (nums[0] % 2 ? 0 : x);

        for (int i = 1; i < nums.size(); ++i)
            if (nums[i] % 2)
                odd = nums[i] + max(odd, even - x);
            else
                even = nums[i] + max(even, odd - x);

        return max(even, odd);
    }
};