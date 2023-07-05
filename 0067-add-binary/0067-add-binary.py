class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i = len(a) - 1
        j = len(b) - 1
        carry = 0
        result = ""

        while i >= 0 or j >= 0:
            bit_a = int(a[i]) if i >= 0 else 0
            bit_b = int(b[j]) if j >= 0 else 0

            # Compute the sum of bit_a, bit_b, and carry
            bit_sum = bit_a + bit_b + carry

            if bit_sum == 0:
                result = "0" + result
                carry = 0
            elif bit_sum == 1:
                result = "1" + result
                carry = 0
            elif bit_sum == 2:
                result = "0" + result
                carry = 1
            elif bit_sum == 3:
                result = "1" + result
                carry = 1

            i -= 1
            j -= 1

        if carry == 1:
            result = "1" + result

        return result