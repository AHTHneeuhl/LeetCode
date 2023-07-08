class Solution:
    def distanceTraveled(self, mainTank: int, additionalTank: int) -> int:
        total = 0

        while mainTank >= 5:
            mainTank = mainTank - 5
            if additionalTank >= 1:
                additionalTank = additionalTank - 1
                mainTank += 1
            total += 5

        return (total + mainTank) * 10

        