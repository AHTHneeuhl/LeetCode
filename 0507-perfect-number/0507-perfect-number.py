class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 0:
            return False
        
        total = 0
        for i in range(1, int(sqrt(num)) + 1):
            if num % i == 0:
                total += (i + num // i)
            if i*i == num: total -= i
                
        return num * 2 == total