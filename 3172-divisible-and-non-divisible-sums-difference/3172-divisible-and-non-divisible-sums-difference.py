class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        notDivisible, divisible = 0, 0

        for i in range(1, n + 1):
            if i % m != 0:
                notDivisible += i
            else:
                divisible += i

        return notDivisible - divisible