class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        digits = digits[::-1]
        carry, idx = 1, 0
        
        while carry:
            if idx < len(digits):
                if digits[idx] == 9:
                    digits[idx] = 0
                else:
                    digits[idx] += 1
                    carry = 0
            else:
                digits.append(1)
                carry = 0
            
            idx += 1
                
        return digits[::-1]