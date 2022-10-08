class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        int closestSum = INT_MAX;
        for (int i = 0; i < nums.size() - 2; i++) {
            int ptr1 = i + 1, ptr2 = nums.size() - 1;
            while (ptr1 < ptr2) {
                int sum = nums[i] + nums[ptr1] + nums[ptr2];
                if (abs(1LL * target - sum) < abs(1LL * target - closestSum)) closestSum = sum;
                if (sum > target) ptr2--;
                else ptr1++;
            }
        }
        return closestSum;
    }
};