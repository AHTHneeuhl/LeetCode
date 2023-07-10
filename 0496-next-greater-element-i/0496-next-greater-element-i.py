class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic, stack = dict(), []
        
        for num in nums2[::-1]:
            while stack and num > stack[-1]:
                stack.pop()
            if stack:
                dic[num] = stack[-1]
            stack.append(num)
            
        return [dic.get(num, -1) for num in nums1]