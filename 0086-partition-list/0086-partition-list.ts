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

function partition(head: ListNode | null, x: number): ListNode | null {
    const dummyLess = new ListNode();
    const dummyGreater = new ListNode();
    let lessTail = dummyLess;
    let greaterTail = dummyGreater;

    let current = head;

    while (current !== null) {
        if (current.val < x) {
            lessTail.next = current;
            lessTail = current;
        } else {
            greaterTail.next = current;
            greaterTail = current;
        }
        current = current.next;
    }

    greaterTail.next = null;
    lessTail.next = dummyGreater.next;

    return dummyLess.next;
};