/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    
    for (let i = 0; i < n; i++) {
        if (!fast) return head;
        fast = fast.next;
    }
    
    if (!fast) {
        return head.next;
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow!.next;
    }
    
    slow!.next = slow!.next!.next;
    
    return head;
};