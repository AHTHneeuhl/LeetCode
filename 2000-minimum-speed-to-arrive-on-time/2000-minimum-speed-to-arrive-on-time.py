class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        # Define the search space for binary search
        left, right = 1, 10**7
        
        while left <= right:
            mid = (left + right) // 2
            
            if self.can_reach_office(dist, hour, mid):
                right = mid - 1
            else:
                left = mid + 1
        
        # If the search space is exhausted and we haven't found a solution
        # return -1, otherwise, return the minimum speed (left)
        return -1 if left > 10**7 else left

    def can_reach_office(self, dist, hour, speed_limit):
        time_taken = 0
        n = len(dist)
        
        for i in range(n - 1):
            time_taken += (dist[i] + speed_limit - 1) // speed_limit
            if time_taken > hour:
                return False
        
        time_taken += dist[-1] / speed_limit
        return time_taken <= hour