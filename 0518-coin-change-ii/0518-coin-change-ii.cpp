class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> cache(amount + 1, 0);
        cache[0] = 1;
        
        for (int i = 0; i < coins.size(); i++)
            for (int j = coins[i]; j <= amount; j++)
                cache[j] += cache[j - coins[i]];

        return cache[amount];
    }
};