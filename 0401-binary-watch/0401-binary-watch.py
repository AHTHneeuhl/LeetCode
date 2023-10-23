class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        def count_bits(n):
            count = 0
            while n:
                count += n & 1
                n >>= 1
            return count

        valid_times = []

        for hour in range(12):
            for minute in range(60):
                if count_bits(hour) + count_bits(minute) == turnedOn:
                    valid_times.append(f"{hour}:{minute:02}")

        return valid_times