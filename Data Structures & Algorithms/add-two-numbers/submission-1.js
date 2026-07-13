/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyHead = new ListNode(0); // Placeholder to anchor the result list
    let current = dummyHead;         // Pointer to track the current position
    let carry = 0;                   // Stores the carry-over digit

    // Loop until both lists are exhausted and no carry remains
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry; // Start with the previous column's carry

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next; // Move to the next node in l1
        }
        
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next; // Move to the next node in l2
        }

        carry = Math.floor(sum / 10);      // Calculate new carry (0 or 1)
        current.next = new ListNode(sum % 10); // Extract the single digit and create node
        current = current.next;            // Advance the result pointer
    }

    return dummyHead.next;
    }
}
