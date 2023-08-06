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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let curr = head;

    while (curr.next) {
        let t = new ListNode(_gcd(curr.val, curr.next.val), curr.next);
        curr.next = t;
        curr = t.next;
    }

    return head;
};

function _gcd(x: number, y: number): number {
    if (x === y) return x;
    if (x > y) {
        return _gcd(x - y, y);
    } else {
        return _gcd(x, y - x);
    }
}