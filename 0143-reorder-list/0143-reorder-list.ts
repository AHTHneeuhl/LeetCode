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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast?.next && fast.next.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow!.next;
    while (curr) {
        const nextt: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextt;
    }
    slow!.next = null;

    let head1: ListNode | null = head;
    let head2: ListNode | null = prev;
    while (head2) {
        const nextt: ListNode | null = head1!.next;
        head1!.next = head2;
        head1 = head2;
        head2 = nextt;
    }
};