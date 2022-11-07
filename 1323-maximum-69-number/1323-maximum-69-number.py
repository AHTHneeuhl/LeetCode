class Solution:
    def maximum69Number (self, num: int) -> int:
        curr_digit = 0
        index_first_six = -1
        num_copy = num
        
        while num_copy:
            if num_copy % 10 == 6:
                index_first_six = curr_digit
                
            num_copy //= 10
            curr_digit += 1
            
        return num if index_first_six == -1 else num + 3 * 10 ** index_first_six