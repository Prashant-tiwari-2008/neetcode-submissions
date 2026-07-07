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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let nextTemp = curr.next; // 1. Save the next node
            curr.next = prev;         // 2. Reverse the pointer
            prev = curr;              // 3. Move prev forward
            curr = nextTemp;          // 4. Move curr forward
        }

        return prev; //
    }
}
