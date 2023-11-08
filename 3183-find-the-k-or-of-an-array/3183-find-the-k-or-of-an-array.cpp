class Solution {
public:
    int findKOr(vector<int>& nums, int k) {
        int res = 0;

        for (int i = 0; i < 32; ++i) {
            int count = 0;
            for (int num: nums) count += num >> i & 1;
            if (count >= k) res += (1 << i);
        }

        return res;
    }
};