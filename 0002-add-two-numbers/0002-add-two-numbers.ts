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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const newHead = new ListNode(0);
    let curr = newHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;
        const columnSum = l1Val + l2Val + carry;
        carry = Math.floor(columnSum / 10);

        const newNode = new ListNode(columnSum % 10);
        curr.next = newNode;
        curr = newNode;

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return newHead.next;
};