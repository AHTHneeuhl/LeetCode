class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        title = ""
        while columnNumber > 0:
            # Subtract 1 from columnNumber to adjust for 1-based indexing
            columnNumber -= 1
            # Calculate the remainder and convert it to the corresponding letter
            remainder = columnNumber % 26
            title = chr(remainder + ord('A')) + title
            # Divide columnNumber by 26 to move to the next place value
            columnNumber //= 26
        return title