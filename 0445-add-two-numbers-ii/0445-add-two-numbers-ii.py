# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, tmp = None, None
        
        while head:
            tmp = head.next
            head.next = prev
            prev = head
            head = tmp
            
        return prev
        
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        r1 = self.reverseList(l1)
        r2 = self.reverseList(l2)
        
        total, carry = 0, 0
        res = ListNode()
        
        while r1 or r2:
            if r1:
                total += r1.val
                r1 = r1.next
            if r2:
                total += r2.val
                r2 = r2.next
                
            res.val = total % 10
            carry = total // 10
            head = ListNode(carry)
            head.next = res
            res = head
            total = carry
            
        return res.next if carry == 0 else res