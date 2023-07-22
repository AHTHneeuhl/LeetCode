class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        fleets, prev_time, n = 0, 0, len(position)
        time_to_reach_destination = [(target - position[i]) / speed[i] for i in range(n)]

        # Sort cars based on their starting positions in descending order
        cars_sorted = sorted(zip(position, time_to_reach_destination), reverse=True)

        for _, time in cars_sorted:
            if time > prev_time:
                fleets += 1
                prev_time = time

        return fleets